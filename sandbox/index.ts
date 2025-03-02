import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('Vehicle', {
		Type: 'Regular',
		Make: 'Iran Xodro',
		Model: 'Samand',
		Year: 2025,
		// Engine: {
		// 	Capacity: 1.8,
		// 	FuelType: 'Petrol',
		// 	Power: 120,
		// 	cyleinders: 4
		// },
		// Transmission: {
		// 	Type: 'Automatic',
		// 	Gears: 5
		// },
		// Wheels: {
		// 	Size: 16,
		// 	Type: 'Alloy'
		// },
		// Brakes: {
		// 	Type: 'ABS',
		// 	Assist: 'EBD'
		// },
		service: undefined || '' ,
		owner: null ||''
	});

	const mySampleVehicle = await client.hGetAll('Vehicle#75');

    if(Object.keys(mySampleVehicle).length === 0) {
        console.log('Vehicle not found; respond with 404');
        return;
    }

	console.log(mySampleVehicle);
};
run();
