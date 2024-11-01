import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 guest pass per month"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Access to group classes",
            "5 guest passes per month",
            "1 personal training session per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 69.99,
          "features": [
            "24/7 gym access",
            "Locker room and sauna access",
            "Unlimited group classes",
            "10 guest passes per month",
            "3 personal training sessions per month",
            "Access to swimming pool"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 99.99,
          "features": [
            "24/7 gym access",
            "Private locker with towel service",
            "Unlimited group classes and specialty workshops",
            "Unlimited guest passes",
            "5 personal training sessions per month",
            "Access to swimming pool and sauna",
            "Nutrition and wellness consultation"
          ]
        }
      ];      
    return (
        <div className="m-10">
            <h2 className="text-5xl py-5">Best Prices in the Towns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    priceOptions.map((option, idx) => <PriceOption key={idx} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;