import PropTypes from 'prop-types';
import { FaCircleCheck } from "react-icons/fa6";



const Feature = ({feature}) => {
    return (
        <div className='flex  items-center gap-1'>
            
            <p className='text-green-700'>< FaCircleCheck /></p>
            <p> {feature}</p>
        </div>
    );
};



Feature.propTypes = {
    feature: PropTypes.string
}


export default Feature;