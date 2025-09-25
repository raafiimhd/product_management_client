import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { AddCategoryModal } from '../../controller/components/AddCategory';
import { AddSubCategoryModal } from '../../controller/components/AddSubCategory';
import { AddProductModal } from '../../controller/components/AddProductModal';
import { Wishlist } from '../../controller/components/Wishlist';
import { ProductDetails } from '../../controller/components/ProductDetails';
import styles from '../../assets/styles/home/HomePage.module.css';

function HomePage() {
  const [currentView, setCurrentView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubCategoryModal, setShowAddSubCategoryModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const [categories, setCategories] = useState([
    { name: 'Laptop', isExpanded: true, subcategories: [{ name: 'Hp', isSelected: true }, { name: 'Dell', isSelected: false }] },
    { name: 'Tablet', isExpanded: false },
    { name: 'Headphones', isExpanded: false }
  ]);

  const [products] = useState([
    { id: 1, name: 'HP AMD Ryzen 3', price: '$529.99', image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 0 },
    { id: 2, name: 'HP A MD Ryzen 3', price: '$529.99', image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 0 },
    { id: 3, name: 'HP AMD Ryzen 3', price: '$529.99', image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 0 }
  ]);

  const toggleCategory = (index) => setCategories(prev => prev.map((cat, i) => i === index ? { ...cat, isExpanded: !cat.isExpanded } : cat));
  const toggleSubcategory = (categoryIndex, subcategoryIndex) => {
    setCategories(prev => prev.map((cat, i) => 
      i === categoryIndex && cat.subcategories
        ? { ...cat, subcategories: cat.subcategories.map((sub, j) => j === subcategoryIndex ? { ...sub, isSelected: !sub.isSelected } : sub) }
        : cat
    ));
  };

  const handleAddCategory = (categoryName) => setCategories(prev => [...prev, { name: categoryName, isExpanded: false }]);
  const handleAddSubCategory = (categoryName, subCategoryName) => {
    setCategories(prev => prev.map(cat => 
      cat.name === categoryName
        ? { ...cat, subcategories: [...(cat.subcategories || []), { name: subCategoryName, isSelected: false }] }
        : cat
    ));
  };

  const handleAddProduct = (productData) => console.log('Adding product:', productData);

  const renderStars = (rating) => (
    <div className={styles.stars}>
      {[1,2,3,4,5].map(star => (
        <Star key={star} className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
      ))}
    </div>
  );

  if (currentView === 'product-details') return <ProductDetails onBack={() => setCurrentView('home')} />;
  if (currentView === 'wishlist') return <Wishlist onBack={() => setCurrentView('home')} />;

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerSearchContainer}>
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search any things" className={styles.headerSearchInput} />
            <button className={styles.headerSearchButton}>Search</button>
          </div>
          <div className={styles.headerIcons}>
            <button onClick={() => setCurrentView('wishlist')}><Heart /> Sign in</button>
            <button><ShoppingCart /> Cart <span>0</span></button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContainer}>
            <h2>Categories</h2>
            <button className={styles.categoryBtn}>All categories</button>
            {categories.map((cat, idx) => (
              <div key={cat.name}>
                <button onClick={() => toggleCategory(idx)} className={styles.categoryBtn}>
                  {cat.name} {cat.isExpanded ? '▼' : '▶'}
                </button>
                {cat.isExpanded && cat.subcategories && (
                  <div className={styles.subcategoryList}>
                    {cat.subcategories.map((sub, subIdx) => (
                      <label key={sub.name} className={styles.subcategoryBtn}>
                        <input type="checkbox" checked={sub.isSelected} onChange={() => toggleSubcategory(idx, subIdx)} /> {sub.name}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className={styles.main}>
          <div className={styles.productsGrid}>
            {products.map(product => (
              <div key={product.id} className={styles.productCard} onClick={() => setCurrentView('product-details')}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  {renderStars(product.rating)}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modals */}
      <AddCategoryModal isOpen={showAddCategoryModal} onClose={() => setShowAddCategoryModal(false)} onAdd={handleAddCategory} />
      <AddSubCategoryModal isOpen={showAddSubCategoryModal} onClose={() => setShowAddSubCategoryModal(false)} onAdd={handleAddSubCategory} categories={categories.map(c => c.name)} />
      <AddProductModal isOpen={showAddProductModal} onClose={() => setShowAddProductModal(false)} onAdd={handleAddProduct} categories={['HP', 'Dell', 'Lenovo']} />
    </div>
  );
}

export default HomePage;
