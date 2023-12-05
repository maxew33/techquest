import '@/styles/globals.css'
import AppContext from '@/components/context/AppContext'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const bgCol = darkMode ? '#010028' : '#FAFAFA'
        const txtCol = darkMode ? '#F8F2FE' : '#010028'
        document.documentElement.style.setProperty('--bg', bgCol)
        document.documentElement.style.setProperty('--col', txtCol)
    }, [darkMode])

    return (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            <Component {...pageProps} />
        </AppContext.Provider>
    )
}