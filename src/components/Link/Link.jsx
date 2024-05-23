import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;
    return (
        <li className="mr-10 rounded-md p-2 text-center hover:bg-green-300"><a href={path}>{name}</a></li>
    );
};



Link.propTypes = {
    route: PropTypes.object
}


export default Link;