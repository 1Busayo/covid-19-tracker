import React from 'react';

// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
state ={
    data:{},
    country:'',
}


async componentDidMount(){
    const fetchedData = await fetchData();
 
 this.setState({data:fetchedData});
}

handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
    //fetch data
    //set the state
}

    render() {
        const {data , country} = this.state;
        return (
            <div className={styles.container}>
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
        )
    }
}
export default App;