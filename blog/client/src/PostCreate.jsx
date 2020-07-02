import React,{ useState } from 'react';
import axios from 'axios';
const PostCreate = () => {
    const [title , setTitle] = useState('');
    const onSubmit = async(e) => {
        e.preventDefault();
        const request = await axios.post('http://localhost:4000/posts',{
            title
        });
        setTitle('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="input">Title</label>
                    <input
                        value={title}
                        onChange={ e => setTitle(e.target.value)}
                        type="text"
                        className='form-control'
                        id='input'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PostCreate
