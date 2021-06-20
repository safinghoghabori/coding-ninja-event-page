import '../../pages/Events/events.css'

const Tags = ({ tag, onClick }) => {
    const onHandleTags = (e) => {
        e.target.classList.toggle('tags__bg')
    }
    return (
        <div className='event__category__links tags'>
            <a href="#!" className='links' id='event__tags' onClick={(e) => { onHandleTags(e); onClick(e); }} value={tag} >{tag}</a>
        </div>
    )
}

export default Tags;