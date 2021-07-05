(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{370:function(e,n,t){"use strict";t.r(n);var _=t(42),o=Object(_.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[e._v("#")]),e._v(" 1. 概述")]),e._v(" "),t("p",[e._v("此文档介绍OpenNCC部署基本概念，OpenNCC CDK和OpenVINO，及使用OpenNCC CDK开发部署OpenNCC相机独立运行模式、与OpenVINO混合模式的方法")]),e._v(" "),t("h3",{attrs:{id:"_1-1-支持平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-支持平台"}},[e._v("#")]),e._v(" 1.1 支持平台")]),e._v(" "),t("p",[e._v("硬件：OpenNCC DK R1、OpenNCC Knight、OpenNCC USB\n主机环境：Ubuntu16.04,Ubuntu18.04, 、树莓派、Arm Linux(需提供工具链交叉编译)"),t("br"),e._v("\n支持语言: C/C++、Python3.5、Python3.7"),t("br"),e._v("\nOpenVINO: 2020.3.194")]),e._v(" "),t("h2",{attrs:{id:"_2-cdk介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-cdk介绍"}},[e._v("#")]),e._v(" 2. CDK介绍")]),e._v(" "),t("p",[e._v("OpenNCC CDK是一套专门针对OpenNCC相机开发的一款工具包，用于在相机中实现深度学习的快速部署")]),e._v(" "),t("h3",{attrs:{id:"_2-1-cdk开发包目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-cdk开发包目录结构"}},[e._v("#")]),e._v(" 2.1 CDK开发包目录结构")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("目录")]),e._v(" "),t("th",[e._v("内容概要")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("docs")]),e._v(" "),t("td",[e._v("技术文档")])]),e._v(" "),t("tr",[t("td",[e._v("View/Linux")]),e._v(" "),t("td",[e._v("Linux版本的OpenView可执行包")])]),e._v(" "),t("tr",[t("td",[e._v("View/Windows")]),e._v(" "),t("td",[e._v("OpenView for Windows")])]),e._v(" "),t("tr",[t("td",[e._v("Public/Library/For_C&C++/Linux")]),e._v(" "),t("td",[e._v("Linux系统下C/C++ CDK静态库和VPU的USB启动引导程序")])]),e._v(" "),t("tr",[t("td",[e._v("Public/Library/For_C&C++/Windows")]),e._v(" "),t("td",[e._v("Windows系统下C/C++ CDK静态库和VPU的USB启动引导程序")])]),e._v(" "),t("tr",[t("td",[e._v("Public/Library/For_Python")]),e._v(" "),t("td",[e._v("Python版本CDK静态库")])]),e._v(" "),t("tr",[t("td",[e._v("Public/Library/Raspberry")]),e._v(" "),t("td",[e._v("Raspberry树莓派版本CDK静态库")])]),e._v(" "),t("tr",[t("td",[e._v("Sample/bin")]),e._v(" "),t("td",[e._v("CDK摄像机引导程序和固件")])]),e._v(" "),t("tr",[t("td",[e._v("Sample/Demo/work with OpenVINO/human_pose_estimation_demo")]),e._v(" "),t("td",[e._v("人体骨骼模型，使用openvino解析结果显示")])]),e._v(" "),t("tr",[t("td",[e._v("Sample/Demo/work with OpenVINO/interactive_face_detection_demo")]),e._v(" "),t("td",[e._v("人脸、年龄、性别、心情模型，使用openvino解析结果显示")])]),e._v(" "),t("tr",[t("td",[e._v("Samples/How_to/Capture video")]),e._v(" "),t("td",[e._v("示例程序，使用CDK库获取视频流")])]),e._v(" "),t("tr",[t("td",[e._v("Samples/How_to/load a model")]),e._v(" "),t("td",[e._v("示例程序，使用CDK库下载一个Blob格式的深度学习模型")])]),e._v(" "),t("tr",[t("td",[e._v("Samples/How_to/work_with_multiple_models")]),e._v(" "),t("td",[e._v("车牌识别，二级模型在相机运行")])]),e._v(" "),t("tr",[t("td",[e._v("Tools/myriad_compiler")]),e._v(" "),t("td",[e._v("IR文件转换成Blob文件工具")])]),e._v(" "),t("tr",[t("td",[e._v("Tools/deployment")]),e._v(" "),t("td",[e._v("权限部署脚本")])])])]),e._v(" "),t("h2",{attrs:{id:"_3-openvino-安装和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-openvino-安装和使用"}},[e._v("#")]),e._v(" 3. OpenVINO 安装和使用")]),e._v(" "),t("p",[e._v("在端侧部署一个深度学习模型，需要将一个训练完成的模型经过针对VPU特性的模型优化和转换，以达到较高的运行性能。OpenNCC兼容OpenVINO的工具集和模型格式，需要依赖Intel OpenVINO的模型优化器来完成模型优化和转换成Blob格式。使用OpenNCC CDK时需要安装OpenVINO的两种情况如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("如果需要自行转换训练好的模型，那么需要安装OpenVINO，来运行模型优化器。\n当OpenVINO运行在与OpenVINO推理引擎的混合模式时，也需要OpenVINO支持。\n")])])]),t("h3",{attrs:{id:"_3-1-下载并安装openvino"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-下载并安装openvino"}},[e._v("#")]),e._v(" 3.1 下载并安装OpenVINO")]),e._v(" "),t("p",[e._v("OpenNCC 目前支持OpenVINO版本：2020.3.194,"),t("RouterLink",{attrs:{to:"/zh/OpenvinoInstall_zh.html"}},[e._v("OpenVINO安装教程")])],1),e._v(" "),t("h3",{attrs:{id:"_3-2-intel-free模型下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-intel-free模型下载"}},[e._v("#")]),e._v(" 3.2 Intel Free模型下载")]),e._v(" "),t("p",[e._v("OpenNCC支持OpenVINO下生产的模型，Intel有大量免费训练好的模型供学习参考和评测。当我们安装完成OpenVINO后，可以使用Intel下载工具下载模型集合。模型下载工具路径：openvino/deployment_tools/tools/model_downloader/downloader.py ,常用命令如下："),t("br"),e._v("\n查看全部可下载的模型："),t("code",[e._v("./downloader.py --print")]),t("br"),e._v("\n下载指定的模型："),t("code",[e._v("./downloader.py --name *")]),t("br"),e._v("\n例如下载一个人脸检测模型 ："),t("code",[e._v("./downloader.py --name face-detection-adas-0001-fp16")]),t("br"),e._v(" "),t("img",{attrs:{src:"/openncc/docimg/zh/SoftManualF1.png",alt:"F1"}})]),e._v(" "),t("h3",{attrs:{id:"_3-3-模型的优化和格式转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-模型的优化和格式转换"}},[e._v("#")]),e._v(" 3.3 模型的优化和格式转换")]),e._v(" "),t("p",[e._v("当我们需要将一个训练好模型部署到OpenNCC时，需要对模型进行优化和转换。安装完成OpenVINO后，可通过模型优化工具 "),t("code",[e._v("/opt/intel/openvino/deployment_tools/model_optimizer/mo.py")]),e._v(" 进行模型优化，具体文档见Intel官方文档："),t("br"),e._v(" "),t("a",{attrs:{href:"https://docs.openvinotoolkit.org/2020.3/_docs_MO_DG_Deep_Learning_Model_Optimizer_DevGuide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Model Optimizer Developer Guide"),t("OutboundLink")],1),e._v(" 。"),t("br"),e._v("\n优化完成模型后，需要进行模型转换到Blob格式，才能在OpenNCC上进行部署。在OpenVINO安装目录 "),t("code",[e._v("/opt/intel/openvino/deployment_tools/inference_engine/lib/intel64")]),e._v("下的myriad_compile工具，使用方法如下：\n命令行终端下输入："),t("code",[e._v("/opt/intel/openvino_2020.3.194/deployment_tools/inference_engine/lib/intel64/myriad_compile -m input_xxx-fp16.xml -o output_xxx.blob -VPU_MYRIAD_PLATFORM VPU_MYRIAD_2480 -VPU_NUMBER_OF_SHAVES 6 -VPU_NUMBER_OF_CMX_SLICES 6")]),e._v(" , 完成格式转换后，可在OpenNCC上部署模型，可参考：ncc_cdk/Samples/How_to/load a model，或者使用OpenView界面程序添加模型来部署测试。")]),e._v(" "),t("h2",{attrs:{id:"_4-openncc运行机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-openncc运行机制"}},[e._v("#")]),e._v(" 4. OpenNCC运行机制")]),e._v(" "),t("p",[e._v("从一个模型训练环境到嵌入式部署，是一个非常重要的工作，需要对深度学习的框架掌握，如常用的：Caffe*, TensorFlow*, MXNet*, Kaldi* 等。此外掌握部署的嵌入式平台非常重要，需要了解平台性能，系统架构特点，结合平台特点需要对训练的模型框架进行优化，并最后调优移植部署到嵌入式平台。OpenNCC专注于深度学习模型的快速部署，兼容Intel OpenVINO，并针对嵌入式图形图像应用场景，在端侧完成了从2MP到20MP不同分辨率传感器集成，端侧实现了可部署专业级别的ISP，可将OpenVINO优化转换后的模型文件动态下载到端侧OpenNCC相机，实现深度学习模型的快速部署。同时OpenNCC设计了独立工作模式、混合开发模式和协处理计算棒模式来适配不同的工作应用场景。")]),e._v(" "),t("h3",{attrs:{id:"_4-1-openncc独立模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-openncc独立模式"}},[e._v("#")]),e._v(" 4.1 OpenNCC独立模式")]),e._v(" "),t("p",[e._v("独立模式下，OpenNCC独立运行一个深度学习模型，并将推理结果通过OpenNCC CDK API反馈给用户。"),t("br"),e._v("\n应用程序部署流程如下图："),t("br"),e._v(" "),t("img",{attrs:{src:"/openncc/docimg/zh/SoftManualF2.png",alt:"F"}}),e._v("\n按照OpenVINO文档，为特定的训练框架"),t("a",{attrs:{href:"https://docs.openvinotoolkit.org/2020.3/_docs_MO_DG_prepare_model_Config_Model_Optimizer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置模型优化器(Configure Model Optimizer)"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://docs.openvinotoolkit.org/2020.3/_docs_IE_DG_Introduction.html#MO",target:"_blank",rel:"noopener noreferrer"}},[e._v("运行模型优化器(Model Optimizer)"),t("OutboundLink")],1),e._v("，基于训练好的网络拓扑、权值和偏差值等可选参数产生一个优化后的IR文件，IR是一对描述整个模型的文件，包括.xml文件--拓扑文件-描述网络拓扑的XML文件，以及.bin文件--训练后的数据文件-一个包含权重并偏置二进制数据的.bin文件，然后再运行myriad_compile将IR文件生成BLOB文件。"),t("br"),e._v("\n在应用程序上，集成使用OpenNCC CDK下载优化完成后的BLOB模型文件，见CDK下Samples/How_to/Load a model 的演示程序。"),t("br"),e._v("\nOpenNCC View是集成了OpenNCC CDK的带操作界面的应用演示程序，也可以使用OpenView来部署模型，获取测试结果。OpenNCC View 使用文档。由于不同的深度模型有差异化的推理输出结果，OpenNCC CDK对不同格式结果支持在不断增加中，如果用户无法在CDK下找到合适的后处理解析模型，需要自己参考ncc_cdk/Samples/How_to/load a model并结合自己应用场景来编写后处理代码。")]),e._v(" "),t("h4",{attrs:{id:"_4-1-1-二级模型运行支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-二级模型运行支持"}},[e._v("#")]),e._v(" 4.1.1 二级模型运行支持")]),e._v(" "),t("p",[e._v("考虑到端侧算力，目前CDK多级模型支持到两级模型级联，如图："),t("br"),e._v(" "),t("img",{attrs:{src:"/openncc/docimg/zh/SoftManualF10.jpg",alt:"F"}}),t("br"),e._v("\n第一级模型必须为目标检测或者分类模型，且输出定义如下：\n"),t("img",{attrs:{src:"/openncc/docimg/zh/SoftManualF11.jpg",alt:"F"}}),t("br"),e._v("\n推理流程："),t("br"),e._v("\n1）图像先经过Pre-cv[1] ，把原图scale到一级模型输入大小，并做相应的格式转换，然后做一级模型推理计算，并且把一级推理结果输出到Pre-cv[2].\n2) Pre-cv[2] 模块解析第一级模型的推理结果，把符合条件的label和conf的检测目标，根据坐标起点(x_min, y_min), 终点(x_max,y_max)从\n原图crop和scale到二级模型输入大小，并做相应的格式转换，进入第二级模型推理。"),t("br"),e._v("\n3）最后把一级模型和全部的二级模型推理结果打包在一起输出。"),t("br"),e._v("\n模型输出解析（图示参数配置为，有效label：2,3，conf=0.8）："),t("br"),e._v(" "),t("img",{attrs:{src:"/openncc/docimg/zh/SoftManualF12.png",alt:"F"}})]),e._v(" "),t("p",[e._v("示例程序："),t("code",[e._v("Samples/How_to/work_with_multiple_models")]),e._v(",第一级模型为车辆和车牌检测，第二级模型是车牌检测，设置有效的label为2。"),t("br"),e._v("\n基于第一级的检测结果，适当微调第一级的检测坐标，有利于识别:"),t("br"),e._v("\n*起点向左上方微调（startXAdj，startYAdj ）"),t("br"),e._v("\n*底点向右下方微调（endXAdj，endYAdj）"),t("br"),e._v("\ncnn2PrmSet.startXAdj  = -5;"),t("br"),e._v("\ncnn2PrmSet.startYAdj  = -5;"),t("br"),e._v("\ncnn2PrmSet.endXAdj   = 5;"),t("br"),e._v("\ncnn2PrmSet.endYAdj   = 5;")]),e._v(" "),t("h3",{attrs:{id:"_4-2-openncc-混合模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-openncc-混合模式"}},[e._v("#")]),e._v(" 4.2 OpenNCC 混合模式")]),e._v(" "),t("p",[e._v("当需要解决一些复杂应用场景，需要多个网络模型组合处理、OpenNCC端侧计算性能无法满足、或者端侧处理完成后需要到边缘侧集中后处理时，往往需要进行系统扩增。将实时性诉求高的模型运行在OpenNCC端侧，其他模型运行在后处理边缘机或云端。"),t("br"),e._v("\n如图，Model-1运行在OpenNCC端侧，完成对视频流的前处理。OpenNNC将一级处理模型结果返回用户应用程序，Model-1和Model-2完全运行于OpenVINO推理引擎下，实现后续处理。"),t("br"),e._v(" "),t("img",{attrs:{src:"/openncc/docimg/zh/SoftManualF3.png",alt:"F"}}),e._v("\nncc_cdk/Samples/How_to/work with OpenVINO 演示了如何让OpenNCC和Host PC上OpenVINO组合实现一个分布式AI系统。")]),e._v(" "),t("h3",{attrs:{id:"_4-3-协处理计算棒模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-协处理计算棒模式"}},[e._v("#")]),e._v(" 4.3 协处理计算棒模式")]),e._v(" "),t("p",[e._v("OpenNCC的协处理模式，类似与Intel NCS2计算棒。这种工作模式下，OpenNCC的视觉传感器不工作，用户可以单独使用OpenNCC 来实现完全兼容OpenVINO环境。OpenVINO典型的深度学习模型部署流程如下：\n"),t("img",{attrs:{src:"/openncc/docimg/zh/SoftManualF4.png",alt:"F"}}),t("br"),e._v("\n按照OpenVINO文档，为特定的训练框架"),t("a",{attrs:{href:"https://docs.openvinotoolkit.org/2020.3/_docs_MO_DG_prepare_model_Config_Model_Optimizer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置模型优化器(Configure Model Optimizer)"),t("OutboundLink")],1),e._v("产生一个优化后的IR文件，基于训练好的网络拓扑、权值和偏差值等可选参数。"),t("br"),e._v("\n将优化生成的IR文件下载到OpenNCC上运行"),t("a",{attrs:{href:"https://docs.openvinotoolkit.org/2020.3/_docs_IE_DG_Introduction.html#IE",target:"_blank",rel:"noopener noreferrer"}},[e._v("推理引擎(Inference Engine)"),t("OutboundLink")],1),e._v("，具体参考OpenVINO文档："),t("a",{attrs:{href:"https://docs.openvinotoolkit.org/2019_R1.1/_inference_engine_samples_validation_app_README.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inference Engine validation application"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://docs.openvinotoolkit.org/2020.3/_docs_IE_DG_Samples_Overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample applications"),t("OutboundLink")],1),e._v(" 。\n将Public/Firmwares/MvNCAPI-ma2480.mvcmd复制并且替换openvino安装目录下的openvino/inference_engine/lib/intel64/MvNCAPI-ma2480.mvcmd.(备注：替换前必须备份MvNCAPI-ma2480.mvcmd，使用NCS2推理时需要恢复该文件)")]),e._v(" "),t("h3",{attrs:{id:"_4-4-独立模式和协处理模式区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-独立模式和协处理模式区别"}},[e._v("#")]),e._v(" 4.4 独立模式和协处理模式区别")]),e._v(" "),t("p",[e._v("如下图右侧是OpenNCC的独立模式，左侧是OpenNCC的协处理模式(类同Intel NCS2)。"),t("br"),e._v(" "),t("img",{attrs:{src:"/openncc/docimg/zh/SoftManualF5.png",alt:"F"}}),e._v("\n当我们需要部署一个基于视觉的深度学习模型时，首先我们需要获取一个高质量的视频流，然后运行推理引擎来把输入的图像数据进行计算，最后输出结果。左侧的协处理模式，我们需要一个OpenNCC C或者Intel NCS2实现端侧推理，同时我们需要从一个摄像机获取视频流，并将视频帧通过USB发送给OpenNCC。而右侧的独立模式，不需要额外的摄像机来获取视频流，我们只需要将模型下载到OpenNCC后，就可以获取到推演结果。"),t("br"),e._v("\n参考OpenVINO官网：https://docs.openvinotoolkit.org/")])])}),[],!1,null,null,null);n.default=o.exports}}]);