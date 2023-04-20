import React, {useState, useEffect} from "react"
import axios from "axios"

export default function Weather() {
    const [weatherData, setWeatherData] = use State(null)
    const [error, setError] = useState(null)

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            const response = await axios.get(
                "https://api.openweathermap.org.data/2.5.weather"
            )
        }
    }
}