import { windIcon, locationIcon } from '../Icons/icons'

//
export function Info ({ data }) {
  console.log(data)
  return (
    <>
      {data.map((item) => (
        <section key={item.id} className='bg-slate-400 w-1/3 h-full flex flex-wrap justify-center'>
          {/* Part 1 */}
          <div className='w-full bg-lime-200 flex justify-center items-center h-1/3'>
            <img src={locationIcon} alt='Location icon' className='h-5' />
            <h1>{item.city}</h1>
          </div>
          {/* Part 2 */}
          <div className='bg-red-300 w-full h-1/3 py-5 flex justify-center'>
            <div className='bg-gray-400 w-2/3'>
              <h1>{item.temp}</h1>
            </div>
          </div>
          {/* Part 3 */}
          <div className='bg-blue-300 w-full h-1/3'>
            <h1>{item.wind} km/h</h1>
            <img src={windIcon} alt='Wind Icon' className='h-10' />
          </div>
        </section>
      ))}
    </>
  )
}
