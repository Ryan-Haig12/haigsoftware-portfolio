import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

const SocialLink = ({ url, style, color }) => {
    const [ iconColor, setIconColor ] = useState(color)

    return (
        <SocialIcon
            url={ url }
            key={ url }
            style={ style }
            bgColor={ iconColor }
            fgColor={ 'white' }
            onMouseEnter={ () => setIconColor('#5eaeff') }
            onMouseLeave={ () => setIconColor(color) }
        />
    )
}

export default SocialLink
