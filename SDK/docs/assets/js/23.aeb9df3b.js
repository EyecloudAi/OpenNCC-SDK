(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{373:function(e,t,i){"use strict";i.r(t);var n=i(42),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"openvino安装指南"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#openvino安装指南"}},[e._v("#")]),e._v(" OpenVINO安装指南")]),e._v(" "),i("h3",{attrs:{id:"download-openvino"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#download-openvino"}},[e._v("#")]),e._v(" Download OpenVINO")]),e._v(" "),i("p",[e._v("  Download the Intel Distribution of "),i("a",{attrs:{href:"https://software.intel.com/content/www/us/en/develop/tools/openvino-toolkit/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenVINO Toolkit"),i("OutboundLink")],1),e._v(" from Intel website.\nPlease select the Linux, 2019 R1.144 version"),i("br"),e._v("\n  The following guidance is performed on Ubuntu 18.04，64 bit OS")]),e._v(" "),i("h3",{attrs:{id:"unpack-installation-package"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#unpack-installation-package"}},[e._v("#")]),e._v(" Unpack installation package")]),e._v(" "),i("ol",[i("li",[e._v("Open a command prompt terminal window.")]),e._v(" "),i("li",[e._v("Change directories to where you downloaded the Intel Distribution of OpenVINO toolkit for Linux* package file.If you downloaded the package file to the current user's Downloads directory:"),i("br"),e._v(" "),i("code",[e._v("cd ~/Downloads/")]),e._v("\nBy default, the file is saved as l_openvino_toolkit_p_<version>.tgz.")]),e._v(" "),i("li",[e._v("Unpack the .tgz file:"),i("br"),e._v(" "),i("code",[e._v("tar -xvzf l_openvino_toolkit_p_.tgz")])])]),e._v(" "),i("h3",{attrs:{id:"start-installing-openvino"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#start-installing-openvino"}},[e._v("#")]),e._v(" Start installing OpenVINO")]),e._v(" "),i("ol",[i("li",[e._v("Open the terminal, enter the folder generated after decompression, and run the command to install"),i("br"),e._v("\nOption 1:GUI Installation Wizard: \n"),i("code",[e._v("sudo ./install_GUI.sh")]),i("br"),e._v("\nOption 2:Command-Line Instructions："),i("br"),e._v(" "),i("code",[e._v("sudo ./install.sh")])]),e._v(" "),i("li",[e._v("The following uses GUI installation as an example, which is also applicable to command line installation. Enter the installation interface:"),i("br"),e._v(" "),i("img",{attrs:{src:"/Openncc/docimg/vinoinstall_figure1.png",alt:"Figure-1"}})]),e._v(" "),i("li",[e._v("If you select the default options, the Installation summary GUI screen looks like this: \n"),i("img",{attrs:{src:"/Openncc/docimg/vinoinstall_figure2.png",alt:"Figure-2"}})]),e._v(" "),i("li",[e._v("You can choose Customize to change the installation directory or the components you want to install: \n"),i("img",{attrs:{src:"/Openncc/docimg/vinoinstall_figure3.png",alt:"Figure-3"}}),i("br"),e._v("\n When installed as root the default installation directory for the Intel Distribution of OpenVINO is /opt/intel/openvino_<version>/For simplicity, a symbolic link to the latest installation is also created: /opt/intel/openvino/")]),e._v(" "),i("li",[e._v("Complete the interface, indicating that OpenVINO has been installed:\n"),i("img",{attrs:{src:"/openncc/docimg/vinoinstall_figure4.png",alt:"Figure-4"}})])]),e._v(" "),i("h3",{attrs:{id:"install-external-software-dependencies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#install-external-software-dependencies"}},[e._v("#")]),e._v(" Install External Software Dependencies")]),e._v(" "),i("p",[e._v(" Note: If you install OpenVINO to a non-default installation directory, replace /opt/intel with the directory where the software is installed."),i("br"),e._v("\n These dependencies are required for:")]),e._v(" "),i("ul",[i("li",[e._v("Intel-optimized build of OpenCV library")]),e._v(" "),i("li",[e._v("Deep Learning Inference Engine")]),e._v(" "),i("li",[e._v("Deep Learning Model Optimizer tools"),i("br"),e._v("\n1.Change to the install_dependencies directory:"),i("br"),e._v(" "),i("code",[e._v("cd /opt/intel/openvino/install_dependencies")]),i("br"),e._v("\n2.Run a script to download and install the external software dependencies:"),i("br"),e._v(" "),i("code",[e._v("sudo -E ./install_openvino_dependencies.sh")])])]),e._v(" "),i("h3",{attrs:{id:"set-the-environment-variables"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#set-the-environment-variables"}},[e._v("#")]),e._v(" Set the Environment Variables")]),e._v(" "),i("p",[e._v(" Before compiling and running the OpenVINO application, you must update multiple environment variables.")]),e._v(" "),i("p",[e._v(" Set the environment variables, the steps are as follows:")]),e._v(" "),i("ol",[i("li",[e._v("Open the .bashrc file in <user_directory>:"),i("br"),e._v(" "),i("code",[e._v("vi /.bashrc")])]),e._v(" "),i("li",[e._v("Add this line of commands to the end of the file:"),i("br"),e._v(" "),i("code",[e._v("source/opt/intel/openvino/bin/setupvars.sh")])]),e._v(" "),i("li",[e._v("Save and close the file: press the Esc key and enter:"),i("br"),e._v(" "),i("code",[e._v("wq")])]),e._v(" "),i("li",[e._v("To test your change, open a new terminal. You will see:\n[setupvars.sh] OpenVINO environment initialized."),i("br"),e._v("\nThe configuration is successful.")])]),e._v(" "),i("h3",{attrs:{id:"configure-the-model-optimizer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-model-optimizer"}},[e._v("#")]),e._v(" Configure the Model Optimizer")]),e._v(" "),i("ol",[i("li",[e._v("Go to the Model Optimizer prerequisites directory:   \n"),i("code",[e._v("cd /opt/intel/openvino/deployment_tools/model_optimizer/install_prerequisites")])]),e._v(" "),i("li",[e._v("Run the script to configure the Model Optimizer for Caffe, TensorFlow, MXNet, Kaldi*, and ONNX:"),i("br"),e._v(" "),i("code",[e._v("$ sudo ./install_prerequisites.sh")]),i("br"),e._v("\nYou can also execute the corresponding version as needed:"),i("br"),e._v("\ncaffe:"),i("br"),e._v(" "),i("code",[e._v("sudo ./install_prerequisites_caffe.sh")]),i("br"),e._v("\nTensorFlow："),i("br"),e._v(" "),i("code",[e._v("sudo./install_prerequisites_tf.sh")]),i("br"),e._v("\nMXNet:"),i("br"),e._v(" "),i("code",[e._v("sudo ./install_prerequisites_mxnet.sh")]),i("br"),e._v("\nONNX："),i("br"),e._v(" "),i("code",[e._v("sudo ./install_prerequisites_onnx.sh")]),i("br"),e._v("\nKaldi："),i("br"),e._v(" "),i("code",[e._v("sudo ./install_prerequisites_kaldi.sh")])])]),e._v(" "),i("h3",{attrs:{id:"run-the-verification-scripts-to-verify-installation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#run-the-verification-scripts-to-verify-installation"}},[e._v("#")]),e._v(" Run the Verification Scripts to Verify Installation")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Go to the Inference Engine demo directory: \n"),i("code",[e._v("cd /opt/intel/openvino/deployment_tools/demo")])])]),e._v(" "),i("li",[i("p",[e._v("Run the Image Classification verification script:   \n"),i("code",[e._v("./demo_squeezenet_download_convert_run.sh")]),i("br"),e._v("\n This verification script downloads a SqueezeNet model, uses the Model Optimizer to convert the model to the .bin and .xml Intermediate Representation (IR) files. The Inference Engine requires this model conversion so it can use the IR as input and achieve optimum performance on Intel hardware."),i("br"),e._v("\n This verification script builds the Image Classification Sample Async application and run it with the car.png image located in the demo directory. When the verification script completes, you will have the label and confidence for the top-10 categories: "),i("br"),e._v(" "),i("img",{attrs:{src:"/openncc/docimg/vinoinstall_figure5.png",alt:"Figure-5"}})])]),e._v(" "),i("li",[i("p",[e._v("Run the Inference Pipeline verification script:   \n"),i("code",[e._v("./demo_security_barrier_camera.sh")]),e._v("\n This script downloads three pre-trained model IRs, builds the Security Barrier Camera Demo application, and runs it with the downloaded models and the car_1.bmp image from the demo directory to show an inference pipeline. The verification script uses vehicle recognition in which vehicle attributes build on each other to narrow in on a specific attribute."),i("br"),e._v("\n First, an object is identified as a vehicle. This identification is used as input to the next model, which identifies specific vehicle attributes, including the license plate. Finally, the attributes identified as the license plate are used as input to the third model, which recognizes specific characters in the license plate."),i("br"),e._v("\n When the verification script completes, you will see an image that displays the resulting frame with detections rendered as bounding boxes, and text:   \n"),i("img",{attrs:{src:"/openncc/docimg/vinoinstall_figure6.png",alt:"Figure-6"}})])]),e._v(" "),i("li",[i("p",[e._v("Close the image viewer window to complete the verification script."),i("br"),e._v("\nTo learn about the verification scripts, see the README.txt file in /opt/intel/openvino/deployment_tools/demo."),i("br"),e._v("\nNow, OpenVINO installation is complete!"),i("br"),e._v("\nReference: Intel official installation documentation")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);