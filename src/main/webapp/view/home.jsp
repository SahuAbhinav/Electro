<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		 <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title>Electro - online shopping </title>
		<jsp:include page="commonHeader.jsp"></jsp:include>

    </head>
	<body>
	<!-- pageHeader start -->
		<jsp:include page="pageHeader.jsp"></jsp:include>
	<!-- pageHeader end -->
		<!-- NAVIGATION -->
		<nav id="navigation">
			<!-- container -->
			<div class="container">
				<!-- responsive-nav -->
				<div id="responsive-nav">
					<!-- NAV -->
					<ul class="main-nav nav navbar-nav">
						<li class="active"><a href="#">Home</a></li>
						<li><a href="#">Hot Deals</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Laptops</a></li>
						<li><a href="#">Smartphones</a></li>
						<li><a href="#">Cameras</a></li>
						<li><a href="#">Accessories</a></li>
					</ul>
					<!-- /NAV -->
				</div>
				<!-- /responsive-nav -->
			</div>
			<!-- /container -->
		</nav>
		<!-- /NAVIGATION -->

		<!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<!-- shop -->
					<div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop01.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Laptop<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					<!-- /shop -->

					<!-- shop -->
					<div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop03.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Accessories<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					<!-- /shop -->

					<!-- shop -->
					<div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop02.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Cameras<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					<!-- /shop -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->

<!-- Create your template -->
<noscript type="text/x-template" id='newProductList'>
<@ 
_.each(products, function (product){

@>
	<div class="product">
		<div class="product-img">
			<img src="./img/<@=nullIfDefaultImage(product.imageLocation[0]) @>" alt="">
			<div class="product-label">
				<span class="sale">-<@=product.discountPercent@>%</span>
				<span class="new">NEW</span>
			</div>
		</div>
		<div class="product-body">
			<p class="product-category"><@= product.category@></p>
			<h3 class="product-name"><a href="product"><@= product.name@></a></h3>
			<h4 class="product-price">&#x20B9;<@=calculateFinalPrice(product.price, product.discountPercent) @> <del class="product-old-price"><@= product.price@></del></h4>
			<div class="product-rating">
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
			</div>
			<div class="product-btns">
				<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
				<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
				<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
			</div>
		</div>
		<div class="add-to-cart">
			<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
		</div>
	</div>
<@});@>	
</noscript>



		<!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">

					<!-- section title -->
					<div class="col-md-12">
						<div class="section-title">
							<h3 class="title">New Products</h3>
							<div class="section-nav">
								<ul class="section-tab-nav tab-nav">
									<li class="active"><a data-toggle="tab" href="#tab1" data-type="Laptops">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab2" data-type="Smartphones">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab3" data-type="Cameras">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab4" data-type="Accessories">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /section title -->

					<!-- Products tab & slick -->
					<div class="col-md-12">
						<div class="row">
							<div class="products-tabs">
								<!-- tab -->
								<div id="tab1" class="tab-pane active">
									<div class="products-slick" data-nav="#slick-nav-1">
										<!-- newProductList template would be here -->
										
									</div>
									<div id="slick-nav-1" class="products-slick-nav"></div>
								</div>
								<!-- /tab -->
								<!-- tab -->
								<div id="tab2" class="tab-pane">
									<div class="products-slick" data-nav="#slick-nav-2">
										<!-- newProductList 2 template would be here -->
										
									</div>
									<div id="slick-nav-2" class="products-slick-nav"></div>
								</div>
								<!-- /tab -->
								<!-- tab -->
								<div id="tab3" class="tab-pane">
									<div class="products-slick" data-nav="#slick-nav-3">
										<!-- newProductList 3 template would be here -->
										
									</div>
									<div id="slick-nav-3" class="products-slick-nav"></div>
								</div>
								<!-- /tab -->
								<!-- tab -->
								<div id="tab4" class="tab-pane">
									<div class="products-slick" data-nav="#slick-nav-4">
										<!-- newProductList 4 template would be here -->
										
									</div>
									<div id="slick-nav-4" class="products-slick-nav"></div>
								</div>
								<!-- /tab -->
							</div>
						</div>
					</div>
					<!-- Products tab & slick -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->

		<!-- HOT DEAL SECTION -->
		<div id="hot-deal" class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col-md-12">
						<div class="hot-deal">
							<ul class="hot-deal-countdown">
								
							</ul>
							<h2 class="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<a class="primary-btn cta-btn" href="#">Shop now</a>
						</div>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /HOT DEAL SECTION -->


<noscript type="text/x-template" id='topSellProductList'>
	<div>
		<@ _.each(products, function (product){ @>

		<div class="product-widget">
			<div class="product-img">
				<img src="./img/<@=nullIfDefaultImage(product.imageLocation[0]) @>" alt="">
			</div>
			<div class="product-body">
				<p class="product-category"><@=product.category@></p>
				<h3 class="product-name">
					<a href="#"><@=product.name@></a>
				</h3>
				<h4 class="product-price">
					&#x20B9;<@=calculateFinalPrice(product.price, product.discountPercent)@>
					<del class="product-old-price"><@=product.price@></del>
				</h4>
			</div>
		</div>
<@})@>
</div>
	</noscript>							
		<jsp:include page="pageFooter.jsp"></jsp:include>
		
		<jsp:include page="commonFooter.jsp"></jsp:include>
		<script src="js/home.js"></script>

	</body>
</html>
