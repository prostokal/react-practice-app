import './app-filter.css';


function AppFilter({countrys,country,filter ,changeFilterState, changeCountryState}) {

    return (
        <div className="app-filter">
            <div>
            <label htmlFor='name'>Lookiing for</label>
            <input
            type="text"
            id='name'
            name="name"
            placeholder='start typing here...'
            required
            
            size="10"
            value={filter}
            onChange={(e) => changeFilterState(e.target.value)}
            />
            </div>
            
            <div className="app-filter-btns">
                <label >Or filter</label>
                {countrys.map(item => <button onClick={() => changeCountryState(item)} type="button" className={country == item ? 'app-filter__btn app-filter__btn_active': 'app-filter__btn'} key={item} >{item}</button>)}
            </div>
        </div>    
    )
}

export default AppFilter;