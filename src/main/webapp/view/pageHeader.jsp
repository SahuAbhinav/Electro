<!-- HEADER -->
<header>
	<!-- TOP HEADER -->
	<div id="top-header">
		<div class="container">
			<ul class="header-links pull-left">
				<li><a href="#"><i class="fa fa-phone"></i> +0731-6996050</a></li>
				<li><a href="#"><i class="fa fa-envelope-o"></i>
						support@electro.com</a></li>
				
			</ul>
			<ul class="header-links pull-right">
				<li><a href="#"><i class="fa fa-dollar"></i> INR</a></li>
				<li><a href="#"><i class="fa fa-user-o"></i> My Account</a></li>
			</ul>
		</div>
	</div>
	<!-- /TOP HEADER -->

	<!-- MAIN HEADER -->
	<div id="header">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
				<!-- LOGO -->
				<div class="col-md-3">
					<div class="header-logo">
						<a href="/electro" class="logo"> <img src="./img/logo.png" alt="">
						</a>
					</div>
				</div>
				<!-- /LOGO -->

				<!-- SEARCH BAR -->
				<div class="col-md-6">
					<div class="header-search">
						<form onsubmit="return false;">
							<select class="input-select">
								<option value="">All Categories</option>
								<option value="Laptops">Laptops</option>
								<option value="Smartphones">Smartphones</option>
								<option value="Cameras">Cameras</option>
								<option value="Accessories">Accessories</option>
							</select> <input class="input" placeholder="Search here" id= "search_string">
							<button class="search-btn" id= "search_product">Search</button>
						</form>
					</div>
				</div>
				<!-- /SEARCH BAR -->

				<!-- ACCOUNT -->
				<div class="col-md-3 clearfix">
					<div class="header-ctn">
						<!-- Wishlist -->
						<div>
							<a href="#"> <i class="fa fa-heart-o"></i> <span>Your
									Wishlist</span>
								<div class="qty">2</div>
							</a>
						</div>
						<!-- /Wishlist -->

						<!-- Cart -->
						<div class="dropdown" id="cartDiv">
							<a class="dropdown-toggle" data-toggle="dropdown"
								aria-expanded="true"> <i class="fa fa-shopping-cart"></i> <span>Your
									Cart</span>
								<div class="qty">3</div>
							</a>
							<div class="cart-dropdown">
								<div class="cart-list">

								</div>
								<div class="cart-summary">
									<small><span class="qty"></span> Item(s) selected</small>
									<h5>SUBTOTAL: &#x20B9;<span class="subTotal"> </span></h5>
								</div>
								<div class="cart-btns">
									<a href="#">View Cart</a> <a href="checkout">Checkout <i
										class="fa fa-arrow-circle-right"></i></a>
								</div>
							</div>
						</div>
						<!-- /Cart -->

						<!-- Menu Toogle -->
						<div class="menu-toggle">
							<a href="#"> <i class="fa fa-bars"></i> <span>Menu</span>
							</a>
						</div>
						<!-- /Menu Toogle -->
					</div>
				</div>
				<!-- /ACCOUNT -->
			</div>
			<!-- row -->
		</div>
		<!-- container -->
	</div>
	<!-- /MAIN HEADER -->
</header>
<!-- /HEADER -->

	<noscript type="text/x-template" id='cartList'>
	<@ 
_.each(products, function (product){

@>
<div class="product-widget">
	<div class="product-img">
		<img src="./img/<@=nullIfDefaultImage(product.imageLocation[0]) @>" alt="">
	</div>
	<div class="product-body">
		<h3 class="product-name">
			<a href="#"><@= product.name@></a>
		</h3>
		<h4 class="product-price">
			<span class="qty1"><@=product.quantity@>x</span>&#x20B9;<@=product.price @>
		</h4>
	</div>
	<button class="delete">
		<i class="fa fa-close"></i>
	</button>
</div>
<@ })@>
</noscript>