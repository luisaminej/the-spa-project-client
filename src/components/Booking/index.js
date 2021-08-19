import React, { useEffect } from 'react'
import {InlineWidget} from 'react-calendly'

export default function Booking() {
    useEffect(()=> {
        const head = document.querySelector('head')
        const script = document.createElement('script')
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        head.appendChild(script)
    },[])

    return (
        <>
            <div class="calendly-inline-widget"
                data-url="https://calendly.com/thejunglespamx/reserva?primary_color=e09fad"
                
                style={{
                    minWidth:"320px",
                    height:"630px"
                }}>

            </div>

            
        </>
    )
}
