(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{371:function(e,t,o){"use strict";o.r(t);var n=o(44),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"_1-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-overview"}},[e._v("#")]),e._v(" 1. Overview")]),e._v(" "),o("p",[e._v(" OpenNCC View is a software used to quickly experience the OpenNCC camera development kit (CDK). The default model under OpenNCC View does not depend on OpenVINO. OpenNCC View integrates all APIs of NCC CDK, realizes connection to OpenNCC, downloads of firmware and AI models, video stream display, and post-processing of algorithm results. Users can operate and control the camera through a friendly interface.\n"),o("img",{attrs:{src:"/openncc/docimg/view_figure1.png",alt:"Figure-1"}})]),e._v(" "),o("h2",{attrs:{id:"_2-support-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-support-platform"}},[e._v("#")]),e._v(" 2.Support platform")]),e._v(" "),o("p",[e._v("OS: Ubuntu16.04 (64 bit), Ubuntu18.04 (64 bit)")]),e._v(" "),o("h2",{attrs:{id:"_3-start-openncc-view"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-start-openncc-view"}},[e._v("#")]),e._v(" 3.Start OpenNCC View")]),e._v(" "),o("p",[e._v("3.1 Download the OpenNCC CDK toolkit, click to download\n3.2 Open the OpenNCC toolkit, run the install_NCC_udev_rules.sh script in the Tools/deployment directory under the OpenNCC CDK package, and enter in the command terminal:"),o("br"),e._v(" "),o("code",[e._v("$sudo ./install_NCC_udev_rules.sh")]),o("br"),e._v("\nto obtain the permission to mount the OpenNCC camera automatically, and then restart the computer."),o("br"),e._v("\n3.3 Go to the NCC_View directory under the CDK and unzip the file:unzip xxx.zip,Enter the unzipped folder, enter the command in the terminal:"),o("br"),e._v(" "),o("code",[e._v("$ ./OpenNCC")]),e._v("\nOpen the OpenNCC View interface,if the operation fails, you can try:"),o("br"),e._v(" "),o("code",[e._v("$ sudo ./OpenNCC")])]),e._v(" "),o("p",[e._v("OpenNCC View interface："),o("br"),e._v(" "),o("img",{attrs:{src:"/openncc/docimg/zh/view.png",alt:"Figure-2"}})]),e._v(" "),o("h2",{attrs:{id:"_4-getting-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-getting-start"}},[e._v("#")]),e._v(" 4.Getting start")]),e._v(" "),o("p",[e._v(" After OpenNCC View is successfully launched, you can then operate the interaction between the camera and OpenNCC View. The steps are as follows:")]),e._v(" "),o("p",[e._v("a. Connect the OpenNCC camera to the USB3.0 interface of the computer, click the Get device info button to get the device information, and the device information will be displayed in the log area. If the connection is not 3.0, please rotate the data line connected to the OpenNCC camera Type-C interface by 180° Insert it again and click the Get device info button to get the device information. Make sure that the log shows: USB interface is 3.0. If the display is not 3.0, it can be used normally, but the transfer rate will drop.")]),e._v(" "),o("p",[e._v("b. Choose any output format yuv420p/H.264/mjpeg, the default resolution is 1080p.")]),e._v(" "),o("p",[e._v('c. Click to load the model "1st network" mode: select the algorithm model, currently supports more than 10 models to choose from, select None to not load the model, only display the video stream. After choosing to load the algorithm model, you can frame the ROI area. After the frame is selected, the algorithm only recognizes the scenes in the area.')]),e._v(" "),o("p",[e._v('d. "Model Score" is the lowest score recognized by the algorithm. Above this score, the algorithm will select the object in the frame; "Display Scaler" is the size of the video display window. Keep the default value. After clicking the "Start running model" button, Load the algorithm model and successfully open the video stream.\nSoftware screenshot: After running the video stream and loading the face detection algorithm successfully.'),o("br"),e._v(" "),o("img",{attrs:{src:"/openncc/docimg/zh/face-detection.png",alt:"Figure-3"}})]),e._v(" "),o("h2",{attrs:{id:"_5-model-analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-model-analysis"}},[e._v("#")]),e._v(" 5.Model analysis")]),e._v(" "),o("p",[e._v(" After the model is deduced by OpenNCC, the real-time deduction result is obtained through the OpenNCC CDK API. OpenNCC View implements a general parser for the deduction result for Object Detection Models."),o("br"),e._v("\n OpenNCC View Post-inference processing supports output in the following formats:")]),e._v(" "),o("ul",[o("li",[e._v("The output data form:[1, 1, N, 7]")]),e._v(" "),o("li",[e._v("N is the number of object frames detected in the current frame")]),e._v(" "),o("li",[e._v("For each detection frame ,contains the following information format:")]),e._v(" "),o("li",[e._v("[image_id, label, conf, x_min, y_min, x_max, y_max]:")]),e._v(" "),o("li",[e._v("image_id - ID of the image in the batch")]),e._v(" "),o("li",[e._v("label - predicted class ID")]),e._v(" "),o("li",[e._v("conf - confidence for the predicted class")]),e._v(" "),o("li",[e._v("(x_min, y_min) - coordinates of the top left bounding box corner")]),e._v(" "),o("li",[e._v("(x_max, y_max) - coordinates of the bottom right bounding box corner."),o("br"),e._v("\n Users can train their own models and define the output layer according to the above format, and can use the model import function of OpenNCC View to add object detection models without programming. If users need to add models in other output formats,You need to refer to the demo in ncc_cdk/Samples/How_to/load a model and write post-processing code in combination with your own application scenario.")])]),e._v(" "),o("h2",{attrs:{id:"_6-functions-detail"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_6-functions-detail"}},[e._v("#")]),e._v(" 6.Functions detail")]),e._v(" "),o("p",[e._v("6.1) Get Device Info："),o("br"),e._v("\nObtain the USB connection information of the device and the computer, and the NCC device module information. If the connected device supports it, you can unlock more functional options. (For example, if NCC is connected to a computer via USB 3.0, you can unlock the yuv output format; if NCC is equipped with a 4K module, you can unlock the 4K resolution display)"),o("br"),e._v("\n6.2）Stream Format："),o("br"),e._v("\nChoose NCC camera USB video output format, currently supports YUV420P, H.264, MJPEG format. (You need to click Get Device Info before selecting YUV420P, which is only available when USB 3.0 is connected)"),o("br"),e._v("\n6.3）Stream Resolution："),o("br"),e._v("\nChange the video resolution of NCC camera, 1080P or 4K can be selected. 4K resolution support requires optional 4K camera module. (Get Device Info before selecting 4K, only available if the module supports 4K)"),o("br"),e._v("\n6.4）1st network model："),o("br"),e._v("\nSelect the algorithm model, select None to not load the model, and only display the video stream. After selecting the algorithm model to load, you can select the ROI area by frame to identify only the scenes in the area."),o("br"),e._v("\n6.5）Model Score："),o("br"),e._v("\nAfter loading the model, the recognition calculation result of the item is scored. When it exceeds a certain score threshold, it will be framed in the video, and the Model Score is the option to control the threshold. The minimum score of the recognition can be adjusted according to user needs. (The default value is 0.5)"),o("br"),e._v("\n6.6）ROI："),o("br"),e._v("\nUsed in conjunction with the algorithm model. After loading the model, if you need to perform algorithm identification only for a certain area, you can manually select the area of interest and only identify the scenes in the area."),o("br"),e._v("\n6.7）Display Scaler："),o("br"),e._v("\nWhen the video stream is displayed, due to the different resolutions of different computers, if the 1080P or 4K video is displayed at the original size, the video size may exceed the desktop size. The user can control the video display window size in real time through the Display Scaler (default value 0.5)"),o("br"),e._v("\n6.8）Add model："),o("br"),e._v('\nClick "add model" to import the generated .blob model file. Note here that you need to put the .blob file and the corresponding IR file (.xml&&.bin) in the same location and with the same file name. Refer to the “OpenNCC Software Manual.docx” for generating .blob files. After adding, you can select the corresponding model in 1st network.'),o("br"),e._v("\n6.9）Del model："),o("br"),e._v("\nDelete the model file imported by the user, and it will be removed in the 1st network model after deletion"),o("br"),e._v("\n6.10）Start running model："),o("br"),e._v("\nClick to start loading firmware and model, and display video window according to user's options"),o("br"),e._v("\n6.11）Log："),o("br"),e._v("\nDisplay the log of OoenNCC DK working, the user can view the running status of the device, and the prompt information about the abnormal state of the device"),o("br"),e._v("\n6.12）Algo Results："),o("br"),e._v("\nDisplay the algorithm result. When the user chooses to load the algorithm model, and the algorithm recognizes an object in the scene, the algorithm result will be printed here (such as the coordinate information of the identified model relative to the current window, and the recognition score calculated by the algorithm, etc. )")])])}),[],!1,null,null,null);t.default=i.exports}}]);