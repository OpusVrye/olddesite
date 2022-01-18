import React from 'react'
import './Home.css'
import Image from 'cloudinary-react/lib/components/Image/Image'
import { Typography } from '@material-ui/core'

const content = [
    {
        name: 'Infinity Moments Vol 1', items: [
            { name: 'The Cozy Moment', url: 'presets/The_cozy_moment_COVER_bctxyy.jpg' },
            { name: 'The Light Pastel Moment', url: 'presets/the_light_pastel_moment_cover_bi1cm3.jpg' },
            { name: 'Just bring it on', url: 'presets/Just_bring_it_on_cover_w9yf4c.jpg' },
            { name: 'Bring Life to Color', url: 'presets/Bring_life_to_Color_cover_a17r8s.png' },
            { name: 'A light polarity', url: 'presets/A_light_polarity_cover_zozndd.jpg' },
            { name: 'Infinity Moments Vol 1', url: 'presets/infinity_moments_vol_1_d2pinb.jpg' },
        ]
    },
    {
        name: 'Infinity Moments Vol 2', items: [
            { name: 'The Cozy Moment', url: 'presets/The_cozy_moment_COVER_bctxyy.jpg' },
            { name: 'The Light Pastel Moment', url: 'presets/the_light_pastel_moment_cover_bi1cm3.jpg' },
            { name: 'Just bring it on', url: 'presets/Just_bring_it_on_cover_w9yf4c.jpg' },
            { name: 'Bring Life to Color', url: 'presets/Bring_life_to_Color_cover_a17r8s.png' },
            { name: 'A light polarity', url: 'presets/A_light_polarity_cover_zozndd.jpg' },
            { name: 'Infinity Moments Vol 1', url: 'presets/infinity_moments_vol_1_d2pinb.jpg' },
        ]
    },
    // { name: 'Black & White', items: [1, 2, 3, 4, 5, 6] },
    // { name: 'Retro Time', items: [1, 2, 3, 4, 5, 6] },
]
const Home = () => {
    return (
        <div id="homeWrapper">
            <div id="homeBanner">
                {/* <Image publicId="presets/Banner_wh0gjj.jpg" width="1920" crop="scale" /> */}

            </div>

            <div id="homeContent">
                {content.map(series => {
                    const { items, name } = series
                    return <div key={name} className="seriesWrapper">
                        <div><Typography variant="h4"> {name}</Typography></div>
                        <div className="series">
                            {items.map(item => {
                                const { name, url } = item
                                return (
                                    <div key={name} className="itemWrapper">
                                        <div className="item">
                                            <Image publicId={url} width="800" crop="scale" />
                                            <Typography align="center" variant="h6">{name}</Typography>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                })}

            </div>


        </div>
    )
}

export default Home