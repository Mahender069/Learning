const main=document.querySelector('#main');


function render(){
        fetch('https://restcountries.com/v3.1/independent')
            .then(data => data.json())
            .then(data =>{
                console.log(data);
                data.forEach((value)=>{
                    const name=value.name.common;
                    const population=value.population;
                    const region=value.region;
                    const capital=value.capital;
                    const imgUrl=value.flags.png;



                    const outerDiv=document.createElement('div');
                    const innerDiv1=document.createElement('div');
                    innerDiv1.classList.add('innerDiv1')
                    const innerDiv2=document.createElement('div');
                    innerDiv2.classList.add('innerDiv2')

                    outerDiv.classList.add('outerDiv')

                    const flag=document.createElement('img');
                    flag.src=imgUrl;
                    flag.classList.add('flag-image')
                    innerDiv1.append(flag);


                    const countryName=document.createElement('p')
                    countryName.textContent=name;
                    countryName.classList.add('country-name');

                    const countryPopulation=document.createElement('p')
                    countryPopulation.textContent=`Population:${population}`;
                    const countryRegion=document.createElement('p')
                    countryRegion.textContent=`Region:${region}`;
                    const countryCapital=document.createElement('p')
                    countryCapital.textContent=`Captial:${capital}`;
                    innerDiv2.append(countryName,countryPopulation,countryRegion,countryCapital);


                    outerDiv.append(innerDiv1,innerDiv2);

                    main.append(outerDiv);
                })
            }
            )

}
render();


document.querySelector('.icon')
    .addEventListener('click',()=>{
        document.querySelector('body').classList.toggle('dark');
    })