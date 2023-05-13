import BlueLinky from 'bluelinky'
import type { AmericanBlueLinkyConfig } from 'bluelinky/dist/controllers/american.controller'
import type AmericanVehicle from 'bluelinky/dist/vehicles/american.vehicle'

export const bluelinkConfig: AmericanBlueLinkyConfig = {
  username: process.env.BLUELINK_USERNAME,
  password: process.env.BLUELINK_PASSWORD,
  pin: process.env.BLUELINK_PIN,
  vin: process.env.BLUELINK_VIN,
  brand: 'hyundai',
  region: 'US',
}

export const Vehicle = async () =>
  await new Promise<AmericanVehicle>((resolve, reject) => {
    const client = new BlueLinky(bluelinkConfig)
    client.on('ready', async () => {
      try {
        const vehicle: unknown = client.getVehicle(bluelinkConfig.vin || '')
        resolve(vehicle as AmericanVehicle)
      } catch (err) {
        console.warn('Bluelink API: Error -', err)
        reject(err)
      }
    })

    client.on('error', async (err) => {
      console.error('Bluelink Client: Error', err)
      reject(err)
    })
  })

export default bluelinkConfig
