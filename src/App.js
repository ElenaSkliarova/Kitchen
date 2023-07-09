import './App.css';
import Header from './components/Header/Header';
import GreetingBlock from './components/GreetingBlock/GreetingBlock';
import Reclame from './components/Reclame/Reclame';
import Catalog from './components/Catalog/Catalog';
import {Context} from './context/Context';
import {reviews} from './data/data_reviews/data_reviews';
import {kitchens} from './data/data_kitchens/data_kitchens';
import {type_kitchen} from './data/data_type_kitchen/data_type_kitchen';
import {designers} from './data/data_designers/data_designers';
import {add_solutions} from './data/data_add_solutions/data_add_solutions';
import {five_steps} from './data/data_five_steps/data_five_steps';
import {form_kitchens} from './data/data_form_kitchen/data_form_kitchens';
import TypeKitchen from './components/TypeKitchen/TypeKitchen';
import ChooseBlock from './components/ChooseBlock/ChooseBlock';
import AddSolutions from './components/AddSolutions/AddSolutions';
import Why from './components/Why/Why';
import FiveSteps from './components/FiveSteps/FiveSteps';
import ReviewsSlider from './components/ReviewsSlider/ReviewsSlider';
import RemainQuestions from './components/RemainQuestions/RemainQuestions';
import AskQuestion from './components/AskQuestion/AskQuestion';
import Footer from './components/Footer/Footer';
import { useRef, useState } from 'react';
import {BsArrowUpCircle} from 'react-icons/bs';
import {IoMdArrowUp} from 'react-icons/io';
import Modal from './UI/Modal/Modal';


function App(){

  const [showBtn, setShowBtn] = useState(false);
  // const [modalActive, setModalActive] = useState(true);

  window.onscroll = () => {
    if(window.scrollY > 700){
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  const catalogRef = useRef();
  const greetingBlockRef = useRef();
  const whyRef = useRef();
  const fiveStepsRef = useRef();
  const chooseBlockRef = useRef();
  const reviewsSliderRef = useRef();
  const footerRef = useRef();

  function scrollToCatalog(){
    catalogRef.current.scrollIntoView({behavior: 'smooth'})    
  }

  function scrollToGreetingBlock(){
    greetingBlockRef.current.scrollIntoView({behavior: 'smooth'})    
  }

  function scrollToWhy(){
    whyRef.current.scrollIntoView({behavior: 'smooth'})
  }

  function scrollToFiveSteps(){
    fiveStepsRef.current.scrollIntoView({behavior: 'smooth'})
  }

  function scrollToChooseBlock(){
    chooseBlockRef.current.scrollIntoView({behavior: 'smooth'})
  }

  function scrollToReviewsSlider(){
    reviewsSliderRef.current.scrollIntoView({behavior: 'smooth'})
  }

  function scrollToFooter(){
    footerRef.current.scrollIntoView({behavior: 'smooth'})
  }

  return(    
      <div>
        <Context.Provider value={{
            reviews, 
            kitchens, 
            type_kitchen, 
            designers, 
            add_solutions, 
            five_steps,
            form_kitchens,
          }}>
                  
          {showBtn && 
            <div onClick={scrollToTop} id='scroll_top'>
              <IoMdArrowUp className='arrow_up'/>
            </div>
            }            

          <Header 
            scrollToCatalog={scrollToCatalog}
            scrollToGreetingBlock={scrollToGreetingBlock}
            scrollToWhy={scrollToWhy}
            scrollToFiveSteps={scrollToFiveSteps}
            scrollToChooseBlock={scrollToChooseBlock}
            scrollToReviewsSlider={scrollToReviewsSlider}
            scrollToFooter={scrollToFooter}
          />
          <GreetingBlock />
          <Reclame />
          <Catalog ref={catalogRef}/>
          <TypeKitchen />
          <ChooseBlock ref={chooseBlockRef} />
          <AddSolutions />
          <Why ref={whyRef}/>
          <FiveSteps ref={fiveStepsRef} />        
          <ReviewsSlider ref={reviewsSliderRef} />
          <GreetingBlock ref={greetingBlockRef}/>
          <RemainQuestions />
          <AskQuestion />
          {/* <Modal active={modalActive} setActive={setModalActive}/> */}
          <Footer ref={footerRef} />
        </Context.Provider>
      </div>    
  )
}

export default App
