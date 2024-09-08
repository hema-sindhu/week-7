import React from 'react';
import HelloWorld from './HelloWorld'; // Ensure HelloWorld is correctly imported
import Header from './task2'; // Ensure Header is correctly imported
import Incss27Footer from './incss27'; // Import Footer from incss27.jsx with a unique name
import DefaultComponent from './task4'; // Ensure DefaultComponent is the default export
import { UserList } from './repComp1'; // Import UserList from repComp1.jsx
import { ArticleList } from './repComp2'; // Import ArticleList from repComp2.jsx
import { TaskList } from './repComp3'; // Import TaskList from repComp3.jsx
import { MessageList } from './repComp4'; // Import MessageList from repComp4.jsx
import { CommentList } from './repComp5'; // Import CommentList from repComp5.jsx
import { PhotoGallery } from './repComp6'; // Import PhotoGallery from repComp6.jsx
import { OrderList } from './repComp7'; // Import OrderList from repComp7.jsx
import { EventList } from './repComp8'; // Import EventList from repComp8.jsx
import { Playlist } from './repComp9'; // Import Playlist from repComp9.jsx
import { NotificationList } from './repComp10'; // Import NotificationList from repComp10.jsx
import Banner from './Banner'; // Import the Banner component
import ImgImp2 from './imgImp2'; // Correctly import ImgImp2 component
import ImgImp4 from './imgImp4'; // Import ImgImp4 component
import ArtworkGallery from './imgImp5'; // Import ArtworkGallery component
import SiteHeader from './exter1'; // Import SiteHeader component
import SiteFooter from './exter2'; // Import SiteFooter component
import NavigationMenu from './exter3'; // Import NavigationMenu component
import HeroSection from './exter4'; // Import HeroSection component
import LoginForm from './exter5'; // Import LoginForm component
import InquiryForm from './exter6'; // Import InquiryForm component
import UserPanel from './exter7'; // Import UserPanel component
import Notification from './exter8'; // Import Notification component
import NavigationPanel from './exter9'; // Import NavigationPanel component
import Modal from './exter10'; // Import Modal component
import Card from './cssMod11'; // Import Card component
import ToggleSwitch from './cssMod12'; // Import ToggleSwitch component
import ButtonComponent from './cssMod13'; // Import the ButtonComponent
import Tab from './cssMod14'; // Import Tab component
import Tooltip from './Tooltip'; // Import the Tooltip component
import cssMod16 from './cssMod16'; // Import cssMod16 component
import ProgressBarDemo from './cssMod17'; // Import ProgressBarDemo component
import ProfilePicture from './cssMod18'; // Import ProfilePicture component
import Tag from './cssMod19'; // Import Tag component
import Breadcrumb from './cssMod20'; // Import Breadcrumb component
import Box from './incss21'; // Import Box component
import Title from './incss22'; // Import Title component
import Container from './incss23'; // Import Container component
import Button from './incss24'; // Import Button component
import Text from './incss25'; // Import Text component
import PageTitle from './incss26'; // Import PageTitle component
import Section from './incss28';
import Label from './incss29';
import Wrapper from './incss30';
import ProductCard from './props1';
import BookCard from './props2'; 
import EventCard from './props3';
import MovieCard from './props4';
import RecipeCard from './props5';
import ProfileCard from './props6';
import CourseCard from './props7';
import NewsCard from './props8';
import JobCard from './props9';
import SongCard from './props10';
import ItemCard from './props11';
import LibraryItem from './props12';
import EventDetails from './props13';
import FilmDetails from './props14';
import DishDetails from './props15';
import ProfileInfo from './props16';
import LearningModule from './props17';
import ArticleCard from './props18';
import MusicCard from './props20';


const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
];

const articles = [
    { id: 1, title: 'React Basics', content: 'Introduction to React components and props.' },
    { id: 2, title: 'State Management', content: 'Understanding state and useState hook.' },
    { id: 3, title: 'React Router', content: 'Implementing navigation in React using React Router.' }
];

const tasks = [
    { id: 1, description: 'Complete React project', completed: true },
    { id: 2, description: 'Read React documentation', completed: false },
    { id: 3, description: 'Write unit tests', completed: false }
];

const messages = [
    { id: 1, text: 'Hello, how are you?' },
    { id: 2, text: 'I am learning React!' },
    { id: 3, text: 'React makes component-based UI development easy.' }
];

const comments = [
    { id: 1, author: 'Alice', content: 'This is a great article!' },
    { id: 2, author: 'Bob', content: 'Thanks for the insights.' },
    { id: 3, author: 'Charlie', content: 'I learned a lot from this.' }
];

const photos = [
    { id: 1, url: 'https://thumbs.dreamstime.com/b/chamomile-field-flowers-border-beautiful-nature-scene-blooming-medical-chamomilles-94966847.jpg', description: 'Photo 1 Flower' },
    { id: 2, url: 'https://static.vecteezy.com/system/resources/thumbnails/008/062/987/small_2x/travel-to-the-beautiful-colorful-majestic-waterfall-in-national-park-forest-during-autumn-soft-water-of-the-stream-in-the-natural-park-photo.jpg', description: 'Photo 2 Nature' },
    { id: 3, url: 'https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg', description: 'Photo 3 Moon' }
];

const orders = [
    { id: 1, productName: 'Laptop', quantity: 2 },
    { id: 2, productName: 'Smartphone', quantity: 5 },
    { id: 3, productName: 'Headphones', quantity: 10 }
];

const events = [
    { id: 1, name: 'React Conference', date: '2024-09-15' },
    { id: 2, name: 'JavaScript Meetup', date: '2024-10-05' },
    { id: 3, name: 'Web Development Workshop', date: '2024-11-20' }
];

const songs = [
    { id: 1, title: 'Song One', artist: 'Artist A' },
    { id: 2, title: 'Song Two', artist: 'Artist B' },
    { id: 3, title: 'Song Three', artist: 'Artist C' }
];

const notifications = [
    { id: 1, message: 'New message received.' },
    { id: 2, message: 'Your order has been shipped.' },
    { id: 3, message: 'Reminder: Meeting at 10 AM tomorrow.' }
];

const App = () => {
    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    const tabs = [
        { id: 1, title: 'Tab 1', content: 'Content of Tab 1' },
        { id: 2, title: 'Tab 2', content: 'Content of Tab 2' },
        { id: 3, title: 'Tab 3', content: 'Content of Tab 3' }
    ];

    const breadcrumbItems = ['Home', 'Products', 'Electronics', 'Laptops'];

    return (
        <>
            <HelloWorld /> {/* Render HelloWorld component */}
            <Header /> {/* Render Header component */}
            <Incss27Footer /> {/* Render Footer component from incss27.jsx */}
            <DefaultComponent /> {/* Render DefaultComponent */}
            
            <h2>User List</h2>
            <UserList users={users} /> {/* Render UserList with the users array */}
            
            <h2>Article List</h2>
            <ArticleList articles={articles} /> {/* Render ArticleList with the articles array */}
            
            <h2>Task List</h2>
            <TaskList tasks={tasks} /> {/* Render TaskList with the tasks array */}
            
            <h2>Message List</h2>
            <MessageList messages={messages} /> {/* Render MessageList with the messages array */}
            
            <h2>Comment List</h2>
            <CommentList comments={comments} /> {/* Render CommentList with the comments array */}
            
            <h2>Photo Gallery</h2>
            <PhotoGallery photos={photos} /> {/* Render PhotoGallery with the photos array */}
            
            <h2>Order List</h2>
            <OrderList orders={orders} /> {/* Render OrderList with the orders array */}
            
            <h2>Event List</h2>
            <EventList events={events} /> {/* Render EventList with the events array */}
            
            <h2>Playlist</h2>
            <Playlist songs={songs} /> {/* Render Playlist with the songs array */}
            
            <h2>Notification List</h2>
            <NotificationList notifications={notifications} /> {/* Render NotificationList with the notifications array */}
            
            <Banner /> {/* Render Banner component */}
            <ImgImp2 /> {/* Render ImgImp2 component */}
            <ImgImp4 /> {/* Render ImgImp4 component */}
            <ArtworkGallery /> {/* Render ArtworkGallery component */}
            <SiteHeader /> {/* Render SiteHeader component */}
            <SiteFooter /> {/* Render SiteFooter component */}
            <NavigationMenu /> {/* Render NavigationMenu component */}
            <HeroSection /> {/* Render HeroSection component */}
            <LoginForm /> {/* Render LoginForm component */}
            <InquiryForm /> {/* Render InquiryForm component */}
            <UserPanel /> {/* Render UserPanel component */}
            <Notification /> {/* Render Notification component */}
            <NavigationPanel /> {/* Render NavigationPanel component */}
            <Modal /> {/* Render Modal component */}
            <Card /> {/* Render Card component */}
            <ToggleSwitch /> {/* Render ToggleSwitch component */}
            <ButtonComponent onClick={handleButtonClick} /> {/* Render ButtonComponent */}
            <Tab tabs={tabs} /> {/* Render Tab component with tabs */}
            <Tooltip text="This is a tooltip" /> {/* Render Tooltip component */}
            <cssMod16 /> {/* Render cssMod16 component */}
            <ProgressBarDemo /> {/* Render ProgressBarDemo component */}
            <h1>Profile</h1>
            <ProfilePicture src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="Profile Picture" />
            <Tag text="New" /> {/* Render Tag component */}
            <Breadcrumb items={breadcrumbItems} /> {/* Render Breadcrumb component */}
            <Box /> {/* Render Box component */}
            <Title /> {/* Render Title component */}
            <Container /> {/* Render Container component */}
            <Button /> {/* Render Button component */}
            <Text /> {/* Render Text component */}
            <PageTitle /> {/* Render PageTitle component */}
            <Label text="This is a label" />
            <Wrapper>
        <h2>Wrapper Title</h2>
        <p>This is some content inside the wrapper.</p>
      </Wrapper>
           
      <ProductCard 
        productName="Apple iPhone 14" 
        price={999} 
        description="The latest iPhone with A15 Bionic chip and advanced dual-camera system." 
      />
      <ProductCard 
        productName="Samsung Galaxy S23" 
        price={799} 
        description="A powerful smartphone with a sleek design and high-resolution display." 
      />
      <ProductCard 
        productName="Google Pixel 7" 
        price={699} 
        description="Google's flagship phone featuring the best Android experience and camera." 
      />
       <BookCard 
        title="To Kill a Mockingbird" 
        author="Harper Lee" 
        yearPublished={1960} 
      />
      <BookCard 
        title="1984" 
        author="George Orwell" 
        yearPublished={1949} 
      />
      <BookCard 
        title="Pride and Prejudice" 
        author="Jane Austen" 
        yearPublished={1813} 
      />
       <EventCard 
        eventName="React Conference 2024" 
        date="March 25, 2024" 
        location="San Francisco, CA" 
      />
      <EventCard 
        eventName="JavaScript World Summit" 
        date="April 10, 2024" 
        location="New York, NY" 
      />
      <EventCard 
        eventName="CSS Design Expo" 
        date="May 5, 2024" 
        location="Los Angeles, CA" 
      />
      <MovieCard 
        title="Inception" 
        director="Christopher Nolan" 
        releaseYear={2010} 
      />
      <MovieCard 
        title="The Godfather" 
        director="Francis Ford Coppola" 
        releaseYear={1972} 
      />
      <MovieCard 
        title="Parasite" 
        director="Bong Joon-ho" 
        releaseYear={2019} 
      />
       <RecipeCard 
        recipeName="Spaghetti Bolognese" 
        ingredients={['Spaghetti', 'Ground Beef', 'Tomato Sauce', 'Onion', 'Garlic']} 
        cookingTime={30} 
      />
      <RecipeCard 
        recipeName="Chicken Curry" 
        ingredients={['Chicken', 'Coconut Milk', 'Curry Powder', 'Onion', 'Garlic']} 
        cookingTime={45} 
      />
      <RecipeCard 
        recipeName="Vegetable Stir-Fry" 
        ingredients={['Broccoli', 'Carrot', 'Bell Pepper', 'Soy Sauce', 'Ginger']} 
        cookingTime={20} 
      />
       <ProfileCard 
        username="Sai Pallavi" 
        bio="A passionate web developer and music lover." 
        profilePicture="https://lens-storage.storage.googleapis.com/png/178afc0785ee40e2a5d3db36fb82f211" 
      />
      <ProfileCard 
        username="Ram" 
        bio="Loves traveling and photography. Always up for an adventure." 
        profilePicture="https://i.pinimg.com/originals/c1/67/2e/c1672e70761f4c170d71a8b7a30da0c1.jpg" 
      />
      <ProfileCard 
        username="Sita" 
        bio="Tech enthusiast, coffee lover, and part-time blogger." 
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxgfE0TTyrCzNNUJV92P3jkLYTZ1Txiy72A&s" 
      />
      <CourseCard 
        courseName="Introduction to React" 
        instructor="John Doe" 
        duration={10} 
      />
      <CourseCard 
        courseName="Advanced CSS Techniques" 
        instructor="Jane Smith" 
        duration={8} 
      />
      <CourseCard 
        courseName="JavaScript Masterclass" 
        instructor="Mark Adams" 
        duration={12} 
      />
       <NewsCard 
        headline="Global Warming on the Rise" 
        summary="Climate experts have warned of increasing global temperatures and their impact on sea levels." 
        source="BBC News" 
      />
      <NewsCard 
        headline="Tech Innovations in 2024" 
        summary="This year has seen groundbreaking innovations in AI, with tech giants leading the charge." 
        source="TechCrunch" 
      />
      <NewsCard 
        headline="Economic Growth Slows Down" 
        summary="Many countries are reporting slower-than-expected growth in the wake of the global pandemic." 
        source="The New York Times" 
      />
      <JobCard 
        jobTitle="Software Engineer" 
        companyName="Tech Innovators Inc." 
        location="San Francisco, CA" 
      />
      <JobCard 
        jobTitle="Product Manager" 
        companyName="Creative Solutions LLC" 
        location="New York, NY" 
      />
      <JobCard 
        jobTitle="Data Analyst" 
        companyName="Data Insights Corp." 
        location="Austin, TX" 
      />
       <SongCard 
        songTitle="Nee Chithram Choosi" 
        artist="Sai pallavi" 
        album="Love Story" 
      />
      <SongCard 
        songTitle="Nuvvunte Na Jathaga" 
        artist="Amy Jackson" 
        album="Fine Line" 
      />
      <SongCard 
        songTitle="Mellaga" 
        artist="Prabhas" 
        album="Varsham" 
      />
     <ItemCard 
        itemName="Wireless Mouse" 
        price={29.99} 
        description="A comfortable and ergonomic wireless mouse." 
      />
      <ItemCard 
        itemName="Bluetooth Speaker" 
        price={49.99} 
      />
      <ItemCard 
        itemName="Gaming Keyboard" 
        price={89.99} 
        description="RGB backlit mechanical gaming keyboard." 
      />
      <LibraryItem 
        title="To Kill a Mockingbird" 
        author="Harper Lee" 
        yearPublished={1960} 
      />
      <LibraryItem 
        title="1984" 
        author="George Orwell" 
        yearPublished={1949} 
      />
      <LibraryItem 
        title="Pride and Prejudice" 
        author="Jane Austen" 
        yearPublished={1813} 
      />
       <EventDetails 
        eventName="Tech Conference 2024" 
        date="March 10, 2024" 
        location="New York, USA" 
      />
      <EventDetails 
        eventName="Music Festival" 
        date="June 25, 2024" 
        location="London, UK" 
      />
      <EventDetails 
        eventName="Art Exhibition" 
        date="September 5, 2024" 
        location="Paris, France" 
      />
     <FilmDetails 
        title="Baahubali: The Beginning" 
        director="S.S. Rajamouli" 
        releaseYear={2015} 
      />
      <FilmDetails 
        title="Arjun Reddy" 
        director="Sandeep Reddy Vanga" 
        releaseYear={2017} 
      />
      <FilmDetails 
        title="Ala Vaikunthapurramuloo" 
        director="Trivikram Srinivas" 
        releaseYear={2020} 
      />
     <DishDetails 
        recipeName="Spaghetti Bolognese"
        ingredients={['Spaghetti', 'Tomato Sauce', 'Ground Beef', 'Onion', 'Garlic']}
        cookingTime={45}
      />
       <ProfileInfo 
        username="johndoe" 
        bio="Software Developer based in San Francisco." 
        profilePicture="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" 
      />
      <LearningModule 
        courseName="React for Beginners" 
        instructor="John Doe" 
        duration={10} 
      />
      <LearningModule 
        courseName="Advanced JavaScript" 
        instructor="Jane Smith" 
        duration={15} 
      />
       <ArticleCard 
        headline='New React Features Announced' 
        summary='React has announced several new features that will enhance the development experience, including improved performance and new hooks.' 
        source='React Blog' 
      />
      <MusicCard
        songTitle="Blinding Lights"
        artist="The Weeknd"
        album="After Hours"
      />
      
            <section/>
        </>
    );
};

export default App;
