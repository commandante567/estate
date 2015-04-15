<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\Flat;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

		// $this->call('UserTableSeeder');

        $this->call('FlatTableSeeder');
	}

}


class FlatTableSeeder extends DatabaseSeeder {

    public function run() {
        
        $faker = Faker\Factory::create();
        $faker->addProvider(new Faker\Provider\en_US\Person($faker));
    $faker->addProvider(new Faker\Provider\en_US\Address($faker));
    $faker->addProvider(new Faker\Provider\en_US\PhoneNumber($faker));
    $faker->addProvider(new Faker\Provider\en_US\Company($faker));
    $faker->addProvider(new Faker\Provider\Lorem($faker));
    $faker->addProvider(new Faker\Provider\Internet($faker));


        foreach(range(5,30) as $index) {

            Flat::create([
                'room' =>$faker->randomDigit,
                'adress' => $faker->streetAddress,
                'road' => $faker->city,
                'floor' => $faker->randomDigit . '/' .$faker->randomDigit,
                'sall' => $faker->randomDigit,
                'slive' => $faker->randomDigit, 
                'sroom' => $faker->randomDigit,
                'phone' => $faker->boolean($chanceOfGettingTrue = 50),
                'fur'=> $faker->boolean($chanceOfGettingTrue = 50),
                'metro' => $faker->boolean($chanceOfGettingTrue = 50),
                'time' => 'дл.',
                'agent' => 'Частное ДВ',
                'contact' => $faker->phoneNumber,
                'comment' => $faker->catchPhrase,
                'price' => $faker->randomNumber($nbDigits = NULL)




            ]);

        }

    }

}
