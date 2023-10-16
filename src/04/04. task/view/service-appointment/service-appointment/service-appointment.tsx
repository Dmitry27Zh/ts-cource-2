import { useEffect, useState } from 'react'
import Select, { ActionMeta } from 'react-select'
import API from '../../../api/api'
import { APICategories, APIPlaces, APISchedule } from '../../../types/api'
import { SelectOption, ServiceAppointmentData } from '../../../types/form'

function ServiceAppointment() {
  const [categories, setCategories] = useState<Awaited<APICategories> | null>(null)
  const [places, setPlaces] = useState<Awaited<APIPlaces> | null>(null)
  const [schedule, setSchedule] = useState<Awaited<APISchedule> | null>(null)
  const [placesToRender, setPlacesToRender] = useState<Awaited<APIPlaces> | null>(null)
  const initialData: ServiceAppointmentData = {
    category: null,
    place: null,
    day: null,
    time: null,
  }
  const [data, setData] = useState(initialData)

  useEffect(() => {
    API.getCarCategoriesList().then((data) => setCategories(data))
    API.getPlacesList().then((data) => setPlaces(data))
  }, [])

  useEffect(() => {
    setData((prevState) => ({ ...initialData, category: prevState.category }))

    if (places) {
      setPlacesToRender(
        places.filter(({ available_car_category }) => {
          return available_car_category.some(
            (inspectionPrice) => inspectionPrice.car_category_id === Number(data.category?.value)
          )
        })
      )
    }
  }, [data.category])

  useEffect(() => {
    setData((prevState) => ({ ...initialData, category: prevState.category, place: data.place }))
    const place = data.place

    if (place) {
      API.getSchedule(Number(place.value)).then((data) => setSchedule(data))
    } else {
      setSchedule(null)
    }
  }, [data.place])

  useEffect(() => {
    setData((prevState) => ({ ...prevState, time: null }))
  }, [data.day])

  const onChange = (option: SelectOption, meta: ActionMeta<SelectOption>) => {
    if (option && meta.name) {
      setData((prevState) => ({ ...prevState, [meta.name as any]: option }))
    }
  }

  const renderCategories = () => {
    if (categories) {
      const options = categories.map((category) => ({
        value: String(category.id),
        label: category.description,
      }))

      return <Select options={options} name="category" value={data.category} onChange={onChange} />
    }
  }

  const renderPlaces = () => {
    if (placesToRender) {
      const options = placesToRender.map((place) => ({
        value: String(place.id),
        label: `${place.title} – ${place.address}`,
      }))

      return <Select options={options} name="place" value={data.place} onChange={onChange} />
    }
  }

  const renderPrice = () => {
    if (places && data.place) {
      const place = places.find((place) => place.id === Number(data.place?.value))

      const price = place?.available_car_category.find(
        (availableCategory) => availableCategory.car_category_id === Number(data.category?.value)
      )?.price

      return (
        <p>
          Стоимость услуг составит: <b>${price}</b>
        </p>
      )
    }
  }
  const renderScheduleDay = () => {
    if (schedule) {
      const options = schedule.days.map((day) => ({
        value: day,
        label: day,
      }))

      return <Select options={options} name="day" value={data.day} onChange={onChange} />
    }
  }

  const renderScheduleTime = () => {
    if (data.day) {
      const day = schedule?.days.find((day) => day === data.day?.value)

      if (day) {
        const times = schedule?.times[day]
        const options = times?.map((time) => ({
          value: time,
          label: time,
        }))

        return <Select options={options} name="time" value={data.time} onChange={onChange} />
      }
    }
  }

  return (
    <div className="container">
      <h2 className="mb-5">Service appointment</h2>
      {renderPrice()}
      <div className="row mb-3">
        <div className="col">{renderCategories()}</div>
        <div className="col">{renderPlaces()}</div>
      </div>
      <div className="row">
        <div className="col">{renderScheduleDay()}</div>
        <div className="col">{renderScheduleTime()}</div>
      </div>
    </div>
  )
}

export default ServiceAppointment
