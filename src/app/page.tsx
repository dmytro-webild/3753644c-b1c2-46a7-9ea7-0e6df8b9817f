"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "/"},
        {
          name: "About",          id: "#about"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Gallery",          id: "#gallery"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/gradient-dragon-boat-background_23-2148943966.jpg"
      logoAlt="Spicy Dragon Restaurant Logo"
      brandName="SPICY DRAGON"
      button={{
        text: "Order Online",        href: "#menu"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "radial-gradient"}}
      title="SPICY DRAGON"
      description="Authentic Flavors. Memorable Experiences."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/crepe-rolls-russian-blinchik-served-with-tartar-sauce_114579-2431.jpg",          imageAlt: "High-quality Chinese food photography"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-asian-food-composition_23-2149035108.jpg",          imageAlt: "Traditional Chinese banquet spread"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chicken-soup-with-ingredients_140725-148889.jpg",          imageAlt: "Wok-fried noodles with shrimp vegetables"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-plate-with-fish-cooked-fish-juicy-fish-plate-delicacy-seafood-lovers_639032-337.jpg",          imageAlt: "Exotic Asian spices and ingredients"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-shrimp-calamari-platter-served-with-sweet-chili-yogurt-sauces_140725-8895.jpg",          imageAlt: "Sizzling tandoori prawns plate"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tuna-soy-sauce-sesame-seed_53876-104581.jpg",          imageAlt: "Crispy duck with pancakes and sauce"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-meat-with-quinoa-lemon-parsley-sauce-side-view_141793-3549.jpg",          imageAlt: "Crispy duck with pancakes and sauce"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-fried-shrimps_140725-44339.jpg",          imageAlt: "Sizzling tandoori prawns plate"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-cooking-job_52683-97547.jpg",          imageAlt: "Exotic Asian spices and ingredients"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/egg-roll-fried-spring-rolls-white-plate-thai-food_1150-21499.jpg",          imageAlt: "Wok-fried noodles with shrimp vegetables"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/eating-gourmet-plate_1121-53.jpg",          imageAlt: "Traditional Chinese banquet spread"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/toast-bread-with-salad-egg-dark-plate_114579-73797.jpg",          imageAlt: "High-quality Chinese food photography"},
      ]}
      buttons={[
        {
          text: "View Menu",          href: "#menu"},
        {
          text: "Reserve a Table",          href: "#contact"},
      ]}
      carouselPosition="right"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517421.jpg",          alt: "Couple having a date together at a luxurious restaurant"},
        {
          src: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517422.jpg",          alt: "People cheering with wine glasses at a luxurious restaurant"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598351.jpg",          alt: "Medium shot couple having lunch in luxury restaurant"},
        {
          src: "http://img.b2bpic.net/free-photo/top-view-friends-having-lunch-luxury-restaurant_23-2151081508.jpg",          alt: "Top view friends having lunch in luxury restaurant"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-delicious-asian-food_23-2149333979.jpg",          alt: "Beautiful and delicious asian food"},
      ]}
      avatarText="Loved by thousands of foodies"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/top-view-noodles-bowl-composition_23-2148803826.jpg",          alt: "Top view noodles in a bowl composition"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/spicy-minced-chicken-white-plate-complete-with-cucumber-lettuce-side-dishes_1150-23196.jpg",          alt: "Spicy minced chicken on a white plate complete with cucumber, lettuce and side dishes."},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/glazed-fried-chicken-wings-with-sesame-seeds-green-onions_84443-85041.jpg",          alt: "Glazed Fried Chicken Wings with Sesame Seeds and Green Onions"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/woman-preparing-spring-rolls-rice-paper-kitchen-table_169016-43577.jpg",          alt: "Woman preparing spring rolls in rice paper on kitchen table"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/woman-working-as-professional-chef_23-2151864215.jpg",          alt: "Woman working as a professional chef"},
      ]}
      marqueeSpeed={40}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Our Culinary Journey"},
      ]}
      buttons={[
        {
          text: "Discover Our Story",          href: "#"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace_140725-8452.jpg"
      imageAlt="Luxurious Asian restaurant interior design"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "prod-1",          brand: "Chinese Cuisine",          name: "Schezwan Fried Rice",          price: "₹350",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-traditional-asian-dish-with-chopsticks_23-2148694367.jpg",          imageAlt: "Schezwan Fried Rice"},
        {
          id: "prod-2",          brand: "Asian Delights",          name: "Hakka Noodles (Veg/Non-Veg)",          price: "₹300",          rating: 4,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fideo-pasta_141793-10032.jpg",          imageAlt: "Hakka Noodles"},
        {
          id: "prod-3",          brand: "Seafood Special",          name: "Chili Garlic Prawns",          price: "₹650",          rating: 5,
          reviewCount: "80",          imageSrc: "http://img.b2bpic.net/free-photo/grilled-shrimps-with-seafood-sauce-white-plate_1373-511.jpg",          imageAlt: "Chili Garlic Prawns"},
        {
          id: "prod-4",          brand: "Starters & Appetizers",          name: "Crispy Spring Rolls",          price: "₹220",          rating: 4,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/cute-pancakes-with-chicken_140725-947.jpg",          imageAlt: "Crispy Spring Rolls"},
        {
          id: "prod-5",          brand: "Warm Soups",          name: "Manchow Soup (Chicken)",          price: "₹180",          rating: 4,
          reviewCount: "70",          imageSrc: "http://img.b2bpic.net/free-photo/tomato-soup-pot-with-chopped-parmesan-cheese-bread-crackers_114579-870.jpg",          imageAlt: "Manchow Soup"},
        {
          id: "prod-6",          brand: "Family Favorites",          name: "Szechuan Chicken (Full)",          price: "₹550",          rating: 5,
          reviewCount: "110",          imageSrc: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663854.jpg",          imageAlt: "Szechuan Chicken"},
      ]}
      title="Our Exquisite Menu"
      description="Savor the rich tastes of China, Asia, and the finest seafood dishes, crafted with authentic recipes and the freshest ingredients. Discover your next favorite meal."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "Gourmet Presentations",          description: "Each dish is a masterpiece, crafted with precision and presented with artistic flair to delight your senses.",          imageSrc: "http://img.b2bpic.net/free-photo/bowl-with-black-past-sea-food_23-2148461642.jpg",          imageAlt: "Gourmet Chinese dish presentation"},
        {
          title: "Hot Pot Experience",          description: "Gather around for an interactive and flavorful hot pot experience, perfect for sharing with family and friends.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hotpot-dishes_23-2149563737.jpg",          imageAlt: "Steaming hot pot with various ingredients"},
        {
          title: "Sweet Endings",          description: "Indulge in our delightful array of Asian-inspired desserts, the perfect finale to your culinary journey.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-cheesecake-with-strawberry-chocolate-plate-bowls-with-strawberries_140725-105617.jpg",          imageAlt: "Dessert Chinese sticky rice mango"},
        {
          title: "Elegant Entrance",          description: "Step into a world of luxury and exquisite taste, welcomed by our grand and beautifully designed entrance.",          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-night-city-with-young-woman_23-2149124062.jpg",          imageAlt: "Modern Asian restaurant exterior"},
        {
          title: "Art of Cooking",          description: "Witness the magic unfold in our kitchen, where skilled chefs masterfully prepare your favorite dishes.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-preparing-salad-kitchen-side-view_176474-4010.jpg",          imageAlt: "Sushi bar with chef preparing rolls"},
        {
          title: "Signature Drinks",          description: "Complement your meal with our unique selection of handcrafted beverages and refreshing cocktails.",          imageSrc: "http://img.b2bpic.net/free-photo/glass-foamy-cocktail-garnished-with-dried-rose-petal-pieces-egg-shell_140725-6032.jpg",          imageAlt: "Restaurant bar with elegant cocktails"},
      ]}
      title="Our Visual Feast"
      description="A captivating journey through our culinary artistry, elegant dining spaces, and the vibrant ambiance that defines Spicy Dragon Restaurant."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Mumbai Foodie",        "Taste of Maharashtra",        "Indian Culinary Awards",        "Gourmet Magazine",        "Times Food Guide",        "Restaurant Review India",        "Dining Icons"]}
      title="Acclaimed Excellence"
      description="Proudly recognized for our culinary dedication and exceptional dining experience by leading food critics and publications."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="auto"
      animationType="slide-up"
      testimonials={[
        {
          id: "1",          name: "Priya Sharma",          role: "Food Critic",          company: "Mumbai Eats",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598413.jpg",          imageAlt: "Smiling man enjoying asian food"},
        {
          id: "2",          name: "Rahul Singh",          role: "Local Entrepreneur",          company: "Innovate Solutions",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/view-people-attending-chinese-new-year-reunion-dinner_23-2151040588.jpg",          imageAlt: "Woman enjoying seafood noodles"},
        {
          id: "3",          name: "Anjali Mehta",          role: "Travel Blogger",          company: "Wanderlust India",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517448.jpg",          imageAlt: "Couple dining in elegant restaurant"},
        {
          id: "4",          name: "The Kapoor Family",          role: "Regular Patrons",          company: "Bhayandar East",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-with-chopsticks_23-2149008715.jpg",          imageAlt: "Family enjoying a meal together"},
        {
          id: "5",          name: "Dr. Sameer Khan",          role: "Culinary Enthusiast",          company: "Food Connoisseurs",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-healthy-meal-together-restaurant_53876-42692.jpg",          imageAlt: "Food blogger taking picture of dish"},
        {
          id: "6",          name: "Divya Rao",          role: "Event Planner",          company: "Celestial Events",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adult-women-communicating-through-sign-language_23-2148590345.jpg",          imageAlt: "Business person dining alone"},
      ]}
      title="What Our Guests Say"
      description="Hear from our cherished patrons about their unforgettable dining experiences and why they keep coming back to Spicy Dragon."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Connect With Us"
      description="We are located at Indralok Phase 6, Bhayandar East, Maharashtra, India. For reservations or inquiries, please use the form below or call us at +91 98765 43210. You can also reach us directly via WhatsApp for quick assistance. We look forward to serving you!"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number",          required: false,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message / Reservation Details (e.g., date, time, number of guests)",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-notebook-circle-red-green-hot-peppers-pay-leaves-black-background_140725-90344.jpg"
      imageAlt="Google Maps location of Spicy Dragon Restaurant"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Submit Inquiry"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-vector/gradient-dragon-boat-background_23-2148943966.jpg"
      logoAlt="Spicy Dragon Restaurant Logo"
      columns={[
        {
          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Menu",              href: "#menu"},
            {
              label: "Gallery",              href: "#gallery"},
          ],
        },
        {
          items: [
            {
              label: "Reservations",              href: "#contact"},
            {
              label: "Order Online",              href: "#menu"},
            {
              label: "Customer Reviews",              href: "#reviews"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
        {
          items: [
            {
              label: "Indralok Phase 6, Bhayandar East, Maharashtra, India",              href: "https://maps.app.goo.gl/YourGoogleMapsLinkHere"},
            {
              label: "+91 98765 43210",              href: "tel:+919876543210"},
            {
              label: "info@spicydragon.com",              href: "mailto:info@spicydragon.com"},
            {
              label: "WhatsApp Us",              href: "https://wa.me/919876543210"},
          ],
        },
      ]}
      logoText="SPICY DRAGON"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
