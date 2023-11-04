import { Loader } from 'google-maps'

const loader = new Loader('')

;(async () => {
  const google = await loader.load()
  const center: google.maps.LatLngLiteral = { lat: -34.397, lng: 150.644 }
  const btnAddDelivery = document.querySelector('.app-add-delivery-zone') as HTMLButtonElement
  const btnSave = document.querySelector('.app-save') as HTMLButtonElement
  const resultMarker = document.querySelector('.app-sample-result-marker')!
  const resultDelivery = document.querySelector('.app-sample-result-marker')!
  const deliveryOffset = 0.1

  const map = new google.maps.Map(document.querySelector('.map') as HTMLElement, {
    center,
    zoom: 8,
  })
  let marker: google.maps.Marker | null = null
  let deliveryZone: google.maps.Polygon | null = null

  map.addListener('click', function (e) {
    if (!marker) {
      marker = new google.maps.Marker({
        position: e.latLng,
        draggable: true,
        map,
      })

      let currentPosition = e.latLng.toJSON()

      marker.addListener('dragstart', function (e) {
        const pos = this.getPosition()

        if (pos) {
          currentPosition = pos.toJSON()
        }
      })

      marker.addListener('dragend', function (e) {
        const pos = this.getPosition()

        if (pos) {
          transferDeliveryPolygon(currentPosition.lat - pos.lat(), currentPosition.lng - pos.lng())
        }
      })

      btnAddDelivery.disabled = false
      btnSave.disabled = false
    }
  })

  function transferDeliveryPolygon(dx: number, dy: number): void {
    if (deliveryZone instanceof google.maps.Polygon) {
      deliveryZone.setPath(
        deliveryZone
          .getPath()
          .getArray()
          .map((item) => {
            const remap = item.toJSON()
            remap.lat -= dx
            remap.lng -= dy

            return remap
          })
      )
    }
  }

  btnAddDelivery.addEventListener('click', () => {
    if (deliveryZone === null && marker instanceof google.maps.Marker) {
      let center = marker.getPosition()

      if (center) {
        console.log('poly')

        const lat = center.lat()
        const lng = center.lng()

        deliveryZone = new google.maps.Polygon({
          paths: [
            {
              lat: lat - deliveryOffset,
              lng: lng - deliveryOffset,
            },
            {
              lat: lat + deliveryOffset,
              lng: lng - deliveryOffset,
            },
            {
              lat: lat + deliveryOffset,
              lng: lng + deliveryOffset,
            },
            {
              lat: lat - deliveryOffset,
              lng: lng + deliveryOffset,
            },
          ],
          fillColor: 'red',
          fillOpacity: 0.3,
          strokeWeight: 1,
          editable: true,
          map,
        })
      }
    }
  })

  btnSave.addEventListener('click', () => {
    if (marker instanceof google.maps.Marker) {
      const center = marker.getPosition()

      if (center instanceof google.maps.LatLng) {
        resultMarker.innerHTML = `Cafe placed in: ${center.lat()}, ${center.lng()}`
      }
    }

    if (deliveryZone instanceof google.maps.Polygon) {
      const coords = deliveryZone
        .getPath()
        .getArray()
        .map((item) => item.toJSON())
      resultDelivery.innerHTML = `Polygon delivery in: ${JSON.stringify(coords)}`
    }
  })
})()
