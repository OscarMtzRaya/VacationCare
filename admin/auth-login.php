<?php
session_start();
if (isset($_SESSION['user'])) {
  header('location: /admin');
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Vacation Care Admin</title>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>
		<meta content="" name="author" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />

		<!-- App favicon -->
		<link rel="shortcut icon" href="assets/images/favicon.icon" />

		<!-- App css -->
		<link
			href="assets/css/bootstrap.min.css"
			rel="stylesheet"
			type="text/css"
		/>
		<link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
	</head>

	<body
		id="body"
		class="auth-page"
		style="
			background-image: url('assets/images/p-1.png');
			background-size: cover;
			background-position: center center;
		"
	>
		<!-- Log In page -->
		<div class="container-md">
			<div class="row vh-100 d-flex justify-content-center">
				<div class="col-12 align-self-center">
					<div class="card-body">
						<div class="row">
							<div class="col-lg-4 mx-auto">
								<div class="card" style="box-shadow: 0px 0px 15px #cacaca;">
									<div class="card-body p-0 auth-header-box">
										<div class="text-center p-3">
											<img src="/assets/images/logo.png" alt="logo" class="img-fluid">
											<h4 class="mt-3 mb-1 fw-semibold text-white font-18">
												Vacation Care Login
											</h4>
											<p class="text-muted mb-0">
												Login to continue
											</p>
										</div>
									</div>
									<div class="card-body pt-0">
										<form class="my-4" action="/admin/controllers/login.php" method="POST" id="loginForm">
											<div class="form-group mb-2">
												<label class="form-label" for="username"
													>Usuario</label
												>
												<input
													type="text"
													class="form-control"
													id="username"
													name="username"
													placeholder="Ingrese nombre de usuario"
												/>
											</div>
											<!--end form-group-->

											<div class="form-group">
												<label class="form-label" for="userpassword"
													>Contraseña</label
												>
												<input
													type="password"
													class="form-control"
													name="userpassword"
													id="userpassword"
													placeholder="Ingrese su contraseña"
												/>
											</div>
											<!--end form-group-->

											<!-- <div class="form-group row mt-3">
												<div class="col-sm-6">
													<div
														class="form-check form-switch form-switch-success"
													>
														<input
															class="form-check-input"
															type="checkbox"
															id="customSwitchSuccess"
														/>
														<label
															class="form-check-label"
															for="customSwitchSuccess"
															>Remember me</label
														>
													</div>
												</div>
												<div class="col-sm-6 text-end">
													<a
														href="auth-recover-pw.html"
														class="text-muted font-13"
														><i class="dripicons-lock"></i> Forgot password?</a
													>
												</div>
											</div> -->
											<!--end form-group-->

											<div class="form-group mb-0 row">
												<div class="col-12">
													<div class="d-grid mt-3">
														<button class="btn btn-primary" type="submit">
															Entrar <i class="fas fa-sign-in-alt ms-1"></i>
														</button>
													</div>
												</div>
												<!--end col-->
											</div>
											<!--end form-group-->
										</form>
										<!--end form-->
										<!-- <div class="m-3 text-center text-muted">
											<p class="mb-0">
												Don't have an account ?
												<a href="auth-register.html" class="text-primary ms-2"
													>Free Resister</a
												>
											</p>
										</div>
										<hr class="hr-dashed mt-4" />
										<div class="text-center mt-n5">
											<h6 class="card-bg px-3 my-4 d-inline-block">
												Or Login With
											</h6>
										</div>
										<div class="d-flex justify-content-center mb-1">
											<a
												href=""
												class="
													d-flex
													justify-content-center
													align-items-center
													thumb-sm
													bg-soft-primary
													rounded-circle
													me-2
												"
											>
												<i class="fab fa-facebook align-self-center"></i>
											</a>
											<a
												href=""
												class="
													d-flex
													justify-content-center
													align-items-center
													thumb-sm
													bg-soft-info
													rounded-circle
													me-2
												"
											>
												<i class="fab fa-twitter align-self-center"></i>
											</a>
											<a
												href=""
												class="
													d-flex
													justify-content-center
													align-items-center
													thumb-sm
													bg-soft-danger
													rounded-circle
												"
											>
												<i class="fab fa-google align-self-center"></i>
											</a>
										</div> -->
									</div>
									<!--end card-body-->
								</div>
								<!--end card-->
							</div>
							<!--end col-->
						</div>
						<!--end row-->
					</div>
					<!--end card-body-->
				</div>
				<!--end col-->
			</div>
			<!--end row-->
		</div>
		<!--end container-->

		<!-- App js -->
		<script src="assets/js/app.js"></script>
		<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
		<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
		<script>
			$("#loginForm").submit(function (e) { 
				e.preventDefault();
				const info = $(this).serialize();
				$.post("/admin/controllers/login.php", info,
					function (data, textStatus, jqXHR) {
						const response = JSON.parse(data);
						if (response.type == "error") {
							Swal.fire("Error", response.message, response.type);
						} else if (response.type == "success") {
							//Swal.fire("Correcto", response.message, response.type);
							window.location.replace("/admin");
						}
					},
				);
			});
		</script>
	</body>
</html>
