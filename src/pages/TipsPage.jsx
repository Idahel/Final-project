import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const TipsPage = () => {

  useEffect(() => {
    document.body.classList.add('tips-page');
    return () => {
      document.body.classList.remove('tips-page');
    };
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Info</Link>
          </li>
          <li>
            <Link to="/quiz">Take quiz</Link>
          </li>
          <li>
            <Link to="/second-hand-stores">Stores</Link>
          </li>
        </ul>
      </nav>

      <h3>Fashioning a Sustainable Wardrobe: Tips for Responsible Choices</h3>
      <h4>Explore Secondhand Fashion</h4>
      <p>Embrace thrift shopping, explore vintage stores, and participate in clothing swaps to give pre-loved garments a new life.</p>
      <h4>Prioritize Quality Over Quantity</h4>
      <p>Invest in well-made, durable products that have a longer lifespan. This approach reduces the need for frequent replacements.</p>
      <h4>Choose Sustainable Fabrics</h4>
      <p>When buying clothing, opt for fabrics like organic cotton, hemp, or bamboo, which have a lower environmental impact than conventional materials.</p>
      <h4>Minimize Single-Use Items</h4>
      <p>Say no to single-use plastics and disposable products. Use reusable alternatives like water bottles, shopping bags, and coffee cups.</p>
      <h4>Support Ethical Brands</h4>
      <p>Research and support brands that prioritize ethical and sustainable practices in their production processes.</p>
      <h4>Practice Mindful Consumption</h4>
      <p>Before making a purchase, consider if it aligns with your needs and values. Avoid impulse buying and unnecessary items.</p>
      <h4>Participate in Clothing Swaps</h4>
      <p>Host or participate in clothing swaps with friends or in your community. This promotes a circular economy and gives new life to clothing items.</p>
      <h4>Capsule Wardrobe Approach</h4>
      <p>Build a capsule wardrobe with versatile, mix-and-match pieces to create a functional wardrobe with fewer items.</p>
      <h4>Repair and Upcycle</h4>
      <p>Learn basic sewing skills to mend clothing or get creative with upcycling projects to breathe new life into old garments.</p>
      <h4>Rent Special Occasion Wear</h4>
      <p>Instead of buying outfits for special occasions, consider renting high-quality fashion items to reduce closet clutter.</p>
      <h4>Mindful Washing Habits</h4>
      <p>Wash clothes only when necessary, and opt for cold water. Hang-dry garments to extend their lifespan and save energy.</p>
      <h4>Mindful Disposal</h4>
      <p>Responsibly dispose of clothing through recycling programs or donate to charities instead of sending items to landfills.</p>
    </div>
  );
};

export default TipsPage;
