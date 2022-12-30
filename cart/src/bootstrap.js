import {faker} from '@faker-js/faker'



const mount = (el)=>{
el.innerHTML = `you have ${faker.random.numeric()} items in the cart`;
}

if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart');
    if (el){
        mount(el)
    }
}

export {mount}