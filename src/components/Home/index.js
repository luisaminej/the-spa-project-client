import React, {useState} from 'react'

import RegisterSuccess from '../Notifications/RegisterSucess'


export default function Home() {

    const [notificationOn, setNotificationOn] = useState(false)



    const handleNotification = () => {
        setNotificationOn(!notificationOn)
    }

    return (
        <div>
            <button onClick={() => {handleNotification()}}>
                Activar notificación
            </button>

            {
                notificationOn ?
                <RegisterSuccess /> :
                null
            }
            
        </div>
    )
}