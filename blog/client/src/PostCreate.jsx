import React from 'react'

const PostCreate = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="input">Title</label>
                    <input type="text" className='form-control' id='input'/>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PostCreate
