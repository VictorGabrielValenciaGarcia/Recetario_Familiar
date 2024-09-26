export default function swDev () {

    let sw_url = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(sw_url).then(
        (response) => {console.log('response', response);
        }
    );

}