import './app-filter.css';


function AppFilter({countrys}) {

    return (
        <div className="app-filter">
            <div>
            <label for='name'>Lookiing for</label>
            <input
            type="text"
            id='name'
            name="name"
            placeholder='start typing here...'
            required
            
            size="10" />
            </div>
            
            <div className="app-filter-btns">
                <label >Or filter</label>
                {countrys.map(item => <button type="button" className='app-filter__btn' key={item} >{item}</button>)}
            </div>
        </div>    
    )
}

export default AppFilter;