import React from 'react';
const JobBoard = ({
                      job: {
                          company,
                          logo,
                          isNew,
                          featured,
                          position,
                          postedAt,
                          contract,
                          location,
                          
                      },
                      handleTagClick,
                  }) => {
    const tags = [];
    
    return (<>
    <styledForm>
        <div
            className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${featured && 'border-l-4 border-teal-500 border-solid'} lg:flex-row lg:my-4`}>
            <div>
                <img className='-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24 lg:my-0' src={logo} alt={company}/>
            </div>
            <div className='flex flex-col justify-between ml-4'>
                <h3 className='font-bold text-xl text-teal-500'>{company} {isNew && (
                    <span
                        className='bg-teal-500 text-teal-100 font-bold rounded-full m-2 py-1 px-2 uppercase text-lg'>New</span>)} {featured && (
                    <span
                        className='bg-gray-800 text-white font-bold rounded-full py-1 px-2 uppercase text-lg'>Featured</span>)}</h3>
                <h2 className="font-bold text-xl my-2">{position}</h2>
                <p className="text-gray-500 font-medium">
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div
                className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:mt-0 lg:pt-0 lg:mb-0">
                {tags ? tags.map((tag) => <span onClick={() => handleTagClick(tag)}
                                                className='cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded'>{tag}</span>) : ''}
            </div>
        </div>
</styledForm>

    </>)
}
export default JobBoard;


