import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
  
    return (
        <div className='bg-blue-500 rounded-lg p-4 text-white space-y-3 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-4xl text-center'>
                {name}
            </h4>
            <div className='pl-5 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-12 bg-green-700 w-full py-2 font-bold rounded-md hover:bg-green-900 mx-auto'>Buy Now</button>
        </div>
    );
};



PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;