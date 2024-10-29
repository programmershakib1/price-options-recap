import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="flex flex-col bg-blue-500 rounded-xl p-5 text-white">
            <h2 className="text-center">
                <span className="text-6xl font-bold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-2xl py-5 text-center">{name}</h4>
            <div className="flex-grow pl-5">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-5 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;