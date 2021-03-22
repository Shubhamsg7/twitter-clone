import React, {useState} from 'react'
import { FaRegCheckCircle, FaRegComment } from 'react-icons/fa'
import  {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import  {FiShare} from 'react-icons/fi'
import img from '../img/profile.png'


const Posts = () => {
    const [state, setState] = useState([
        {
            id: 1,
            profile: "https://via.placeholder.com/50/566573/FFFFFF/?text=J",
            img: "https://via.placeholder.com/800x450/EB984E/FFFFFF/?text=Image 1",
            username:"john",
            name:"John",
            posttime:"5m",
            msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",      
            comment:"6",      
            retweet:"1",      
            like:"20",      
            share:"2",      
        },
        {
            id: 2,
            profile: "https://via.placeholder.com/50/9B59B6/FFFFFF/?text=AK",
            img: "https://via.placeholder.com/800x450/D2B4DE/FFFFFF/?text=Image 2",
            username:"ajaykumar",
            name:"Ajay Kumar",
            posttime:"1h",
            msg:"यह एक लंबा स्थापित तथ्य है कि जब एक पाठक एक पृष्ठ के खाखे को देखेगा तो पठनीय सामग्री से विचलित हो जाएगा. Lorem Ipsum का उपयोग करने का मुद्दा यह है कि इसमें एक और अधिक या कम अक्षरों का सामान्य वितरण किया गया है",   
            comment:"15",      
            retweet:"2",      
            like:"45",      
            share:"5",      
        },
        {
            id: 3,
            profile: "https://via.placeholder.com/50/76D7C4/FFFFFF/?text=M",
            img: "https://via.placeholder.com/800x450/F1C40F/FFFFFF/?text=Image 3",
            username:"mark",
            name:"Mark",
            posttime:"5h", 
            msg:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",     
            comment:"25",      
            retweet:"2",      
            like:"98",      
            share:"4",      
        },
        {
            id: 4,
            profile: "https://via.placeholder.com/50/7F8C8D/FFFFFF/?text=M",
            img: "https://via.placeholder.com/800x450/E59866/FFFFFF/?text=Image 4",
            username:"mohan",
            name:"Mohan",
            posttime:"2d", 
            msg:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",     
            comment:"30",      
            retweet:"4",      
            like:"498",      
            share:"18",      
        },
        {
            id: 5,
            profile: "https://via.placeholder.com/50/5DADE2/FFFFFF/?text=M",
            img: "https://via.placeholder.com/800x450/A569BD/FFFFFF/?text=Image 5",
            username:"honey",
            name:"Honey",
            posttime:"6d", 
            msg:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",     
            comment:"60",      
            retweet:"6",      
            like:"980",      
            share:"10",      
        },
    ]);

    return (
        <>
        {state.map((key) => (
        <div className="postspage">
            <div className="postspage__first">
                <div className="postpage__first__img">
                    <img src={key.profile} alt="Post Image" />
                </div>
                <div className="postpage_first_name">
                    <strong>{key.name}</strong> <FaRegCheckCircle className="verify" />
                </div>
                <div className="postpage__first__username">
                    @{key.username} <span>{key.posttime}</span>
                </div>
            </div>
            <div className="postspage__details">
                <div className="postspage__details__msg">
                {key.msg}
                </div>
                <div className="postspage__details__img">
                    <img src={key.img} alt="Post Image" />
                </div>
                <div className="reactions">
                    <span><FaRegComment className="re" /> <small>{key.comment}</small></span>
                    <span><AiOutlineRetweet className="re" /> <small>{key.retweet}</small></span>
                    <span><AiOutlineHeart className="re" /> <small>{key.like}</small></span>
                    <span><FiShare className="re" /> <small>{key.share}</small></span>
                </div>
            </div>
        </div>
        ))}
        </>
    )
}

export default Posts
