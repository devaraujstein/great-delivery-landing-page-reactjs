import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
 
function CarouselAuto(props)
{
    var items = [
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png'
        },
        {
            link: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png'
        }
    ]
 
    return (
        <Carousel autoPlay navButtonsAlwaysVisible indicators={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (

        <Paper >
            <img src={props.item.link} height="100%" width="100%" alt="" />
        </Paper>

    )
}

export default CarouselAuto;