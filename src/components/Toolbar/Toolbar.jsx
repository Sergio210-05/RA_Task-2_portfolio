export const Toolbar = (props) => {
  const {filters, selected, onSelectFilter} = props;
  // const filters = ["All", "Websites", "Flayers", "Business Cards"]
  // console.log(filters)

  return (
    <>
      <div className='toolbar__filters'>
        { filters.map( (filter, index) => {
          return (
            <button className={`toolbar__button ${filter === selected ? "active" : ""}`}
            key={index}
            onClick={() => onSelectFilter(filter)}>
              {filter}
            </button>
          )} 
        )}
      </div>
    </>
    
  )
}
