# Put Nature Back

Yes, I used ai to write this out for me. I ain't writing allat. A Next.js web application focused on environmental conservation and sustainable practices. The website features a modern, responsive design with interactive elements and informative content about environmental initiatives.

## Features

- Responsive design for all screen sizes
- Interactive fade-in animations on scroll
- Mobile-friendly navigation
- User authentication system
- Product showcase
- Environmental mission information
- Contact form

## Tech Stack

- Next.js
- React
- TypeScript
- CSS Modules
- NextAuth.js for authentication

## Future Tech Stack Additions

- **Supabase Integration**
  - User authentication and authorization
  - Real-time database capabilities
  - File storage for product images
  - User profiles and preferences
  - Order history and tracking
  - Product inventory management

- **Stripe Payment Integration**
  - Secure payment processing
  - Subscription management
  - Payment history tracking
  - Automated donation processing
  - Order fulfillment system
  - Refund handling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
PutNatureBack/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── login/
│   │   ├── signup/
│   │   └── forgotpass/
│   ├── api/
│   └── layout.tsx
├── public/
│   └── images/
└── styles/
```

## Future Database Structure (Supabase)

```
Tables:
- users
  - id
  - email
  - name
  - created_at
  - updated_at
  - preferences

- products
  - id
  - name
  - description
  - price
  - stock
  - images
  - category
  - created_at
  - updated_at

- orders
  - id
  - user_id
  - total_amount
  - status
  - created_at
  - updated_at
  - shipping_address

- order_items
  - id
  - order_id
  - product_id
  - quantity
  - price_at_time

- donations
  - id
  - user_id
  - amount
  - project_id
  - status
  - created_at
```

## Problems to Fix

1. **PNB Logo Issues**
   - Logo not loading correctly on home page
   - Need to fix image path and loading issues
   - Ensure consistent logo appearance across all pages

2. **Authentication Pages Design**
   - Login, forgot password, and signup pages need visual improvements
   - Current design lacks polish and user experience
   - Need to implement better form styling and layout
   - Add proper validation feedback
   - Improve error message presentation

3. **Website Aesthetics**
   - General improvements needed across all pages
   - Better alignment and spacing
   - Consistent styling throughout the application
   - Enhanced visual hierarchy
   - Better color scheme implementation

4. **Animation Enhancements (maybe)**
   - Add fade-in and fade-out effects
   - Implement smooth transitions between pages
   - Add loading animations
   - Improve scroll animations

5. **Home Page Background (maybe)**
   - Consider replacing static background image with video
   - Implement anchored video background
   - Ensure video doesn't affect performance
   - Add proper video fallback for mobile devices

6. **Responsive Design**
   - Improve mobile layout
   - Better handling of different screen sizes
   - Fix alignment issues on various devices
   - Optimize images for different screen sizes

7. **Performance Optimization**
   - Optimize image loading
   - Implement proper lazy loading
   - Reduce initial bundle size
   - Improve page load times

8. **User Experience**
   - Add loading states
   - Improve form feedback
   - Better error handling
   - Smoother navigation transitions

## Future Development Plans (For Randy)

1. **Database Implementation (Randy)**
   - Set up Supabase project
   - Create database schema
   - Implement user authentication
   - Set up product management
   - Create order tracking system
   - Implement donation tracking

2. **Payment Integration (Randy)**
   - Set up Stripe account
   - Implement payment processing
   - Create subscription system
   - Set up donation processing
   - Implement order fulfillment
   - Add payment history tracking

3. **Additional Features**
   - User dashboard
   - Order management
   - Product inventory system
   - Donation tracking
   - Email notifications
   - Admin panel

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
