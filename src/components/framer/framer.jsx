import { useState } from "react"

const Framer = ({data}) => {
  const [form,setForm] = useState({
    date: ''
  })
  const [filteredData,setFilteredData] = useState(data)
  const handleChange = (e) => {
    const {value,name} = e.target
    setForm({
      [name]: value
    })
  }
  const filter_data = () => {
    const {date} = form
     let res = filteredData.filter(obj => obj.date === date ) 
     
    if(res.length >= 1){
      setFilteredData(res)
    } else if(date === '' || res.length < 1){
      console.log(filteredData)
    }
  }
  const amount_sort = () => {
    console.log('hello')
    const res = [...filteredData].sort((a,b) => a.amount - b.amount)
    console.log(res);
    setFilteredData(res)
  }
  // console.log(filteredData)
  return (
    <div>
      <button onClick={amount_sort}>sort items</button>
        <input type="date" name="date" onChange={handleChange} />
        <button onClick={filter_data}>click</button><br />
        <div>
          {filteredData.map( item => (
            <p key={item.desc}>{item.desc}</p>
          ))}
        </div>
    </div>
  )
}

export default Framer
