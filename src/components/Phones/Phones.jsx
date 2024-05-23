import axios from "axios";
import { useEffect, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

import { Audio, Grid } from "react-loader-spinner";



const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {


        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
                setLoading(false)
            })

    }, [])
    return (
        <div>
            <div className="ml-6">
                {
                   loading && <Grid
                   visible={true}
                   height="80"
                   width="80"
                   color="#4fa94d"
                   ariaLabel="grid-loading"
                   radius="12.5"
                   wrapperStyle={{}}
                   wrapperClass="grid-wrapper"
                   />
                
                
                }
            </div>
            <div className="ml-6">
                {
                   loading && <Audio
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
                
                
                }
            </div>
            <h2 className="text-2xl">Phones: {phones.length}</h2>
            <BarChart width={1400} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;