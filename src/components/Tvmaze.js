import React from 'react'

const Tvmaze = () => {


    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold py-2'>Tvmaze</h1>

            <form >
                <div className='bg-green-500 h-28 flex flex-row justify-center'>
                    <div className=''>

                        <input type="radio" value="byactors" name="radioButton" />
                        <span><label >byActors</label></span>

                    </div>
                    <div>

                        <input type="radio" value="byshows" name="radioButton" />
                        <span><label>byShows</label></span>

                    </div>
                </div>
            </form>




        </div>
    )
}

export default Tvmaze