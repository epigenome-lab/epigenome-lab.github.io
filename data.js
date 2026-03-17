/*  data.js
    ===========================
    랩실 데이터 – 여기서 내용을 수정하세요
    =========================== */

// ── 교수님 정보 ──────────────────────────────────────────
const PROFESSOR = {
  name:  "홍길동",                          // ← 교수님 성함
  title: "Professor · Department of Computer Science",
  photo: "images/professor/professor.jpg",  // ← 사진 경로
  bio: `OO랩은 XXX 대학교 컴퓨터공학과 소속 연구실입니다.
우리 연구실은 인공지능, 머신러닝, 컴퓨터 비전 분야에서
세계 최고 수준의 연구를 수행하고 있습니다.

교수님은 XX년부터 해당 분야를 연구해 오셨으며,
SCI 급 저널에 60편 이상의 논문을 발표하였습니다.
국내외 학술대회에서 우수 논문상을 다수 수상하였으며,
다양한 산학 협력 프로젝트를 이끌고 있습니다.`,
  email: "professor@university.ac.kr",      // ← 이메일
  interests: ["Deep Learning", "Computer Vision", "Natural Language Processing", "Robotics"],
};

// ── 연구원 정보 ──────────────────────────────────────────
const MEMBERS = [
  { name: "김민준", role: "PhD Student",      photo: "images/members/member1.jpg" },
  { name: "이서연", role: "PhD Student",      photo: "images/members/member2.jpg" },
  { name: "박도현", role: "MS Student",       photo: "images/members/member3.jpg" },
  { name: "최예진", role: "MS Student",       photo: "images/members/member4.jpg" },
  { name: "정우진", role: "MS Student",       photo: "images/members/member5.jpg" },
  { name: "강지수", role: "Undergraduate",    photo: "images/members/member6.jpg" },
  { name: "윤하은", role: "Undergraduate",    photo: "images/members/member7.jpg" },
  { name: "임서준", role: "Undergraduate",    photo: "images/members/member8.jpg" },
  // 여기에 추가 가능
];

// ── 졸업생 정보 ──────────────────────────────────────────
const ALUMNI = [
  { name: "오지훈",  role: "PhD 2023 → Google",          photo: "images/alumni/alumni1.jpg" },
  { name: "배수아",  role: "MS 2023 → Samsung Research",  photo: "images/alumni/alumni2.jpg" },
  { name: "신민호",  role: "MS 2022 → Kakao",             photo: "images/alumni/alumni3.jpg" },
  { name: "류가현",  role: "PhD 2022 → 한국과학기술원",    photo: "images/alumni/alumni4.jpg" },
  { name: "황성찬",  role: "MS 2021 → Naver",             photo: "images/alumni/alumni5.jpg" },
  { name: "권나영",  role: "MS 2021 → LG AI Research",    photo: "images/alumni/alumni6.jpg" },
  // 여기에 추가 가능
];

// ── 프로젝트 정보 ─────────────────────────────────────────
const PROJECTS = [
  {
    title: "Real-time Object Detection for Autonomous Driving",
    tag:   "Computer Vision",
    image: "images/projects/project1.jpg",
    desc:  `자율주행 환경에서 실시간으로 객체를 탐지하고 분류하는 딥러닝 모델을 연구합니다.
경량화된 네트워크 구조와 Edge AI 기술을 결합하여 저지연·고정확도의 탐지 파이프라인을 개발하며,
다양한 날씨·조명 조건에서도 강인한 성능을 유지할 수 있는 도메인 적응 기법을 함께 연구합니다.`,
    tags:  ["PyTorch", "YOLOv8", "TensorRT", "ROS2"],
    period: "2022 – 현재",
  },
  {
    title: "Multi-modal Large Language Model for Medical Imaging",
    tag:   "AI · Healthcare",
    image: "images/projects/project2.jpg",
    desc:  `의료 영상(CT, MRI, X-ray)과 임상 텍스트를 동시에 처리하는 멀티모달 대형 언어 모델을 개발합니다.
병변 자동 분할, 진단 보조 리포트 생성 등을 통해 임상 의사의 판단을 지원하며,
소량의 레이블 데이터로도 높은 성능을 내는 Few-shot Learning 전략을 핵심 기술로 채택합니다.`,
    tags:  ["Transformers", "ViT", "DICOM", "Few-shot Learning"],
    period: "2023 – 현재",
  },
  {
    title: "Reinforcement Learning for Robotic Manipulation",
    tag:   "Robotics · RL",
    image: "images/projects/project3.jpg",
    desc:  `강화학습 기반의 로봇 팔 제어 알고리즘을 연구합니다.
시뮬레이션에서 학습한 정책을 실제 환경에 그대로 적용하는 Sim-to-Real Transfer 기술과,
인간 시연 데이터를 활용한 Imitation Learning을 결합하여 빠른 학습과 안전한 배포를 동시에 달성합니다.`,
    tags:  ["Isaac Gym", "PPO", "Sim-to-Real", "ROS"],
    period: "2021 – 현재",
  },
];

// ── 논문 데이터 (60편) ────────────────────────────────────
// 형식: { year, title, authors, journal }
const PUBLICATIONS = [
  // 2024
  { year:"2024", title:"Efficient Transformer for Real-Time Dense Prediction", authors:"Kim M., Lee S., Hong G.", journal:"IEEE Transactions on Pattern Analysis and Machine Intelligence" },
  { year:"2024", title:"Self-Supervised Depth Estimation via Cross-Modal Distillation", authors:"Park D., Kim M., Hong G.", journal:"International Journal of Computer Vision" },
  { year:"2024", title:"Adaptive Domain Generalization for Autonomous Driving", authors:"Choi Y., Jung W., Hong G.", journal:"IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)" },
  { year:"2024", title:"Medical Image Segmentation with Foundation Models", authors:"Kang J., Hong G.", journal:"Medical Image Analysis" },
  { year:"2024", title:"Zero-Shot Robotic Manipulation via Large Vision-Language Models", authors:"Yoon H., Lim S., Hong G.", journal:"Robotics and Autonomous Systems" },
  { year:"2024", title:"Context-Aware Video Object Segmentation", authors:"Kim M., Park D., Hong G.", journal:"IEEE Transactions on Image Processing" },
  { year:"2024", title:"Continual Learning for Visual Recognition", authors:"Lee S., Choi Y., Hong G.", journal:"Pattern Recognition" },
  // 2023
  { year:"2023", title:"Graph Neural Networks for Scene Understanding", authors:"Oh J., Bae S., Hong G.", journal:"IEEE Transactions on Neural Networks and Learning Systems" },
  { year:"2023", title:"Semi-Supervised Learning with Pseudo Label Refinement", authors:"Shin M., Ryu G., Hong G.", journal:"Neural Networks" },
  { year:"2023", title:"Deformable Convolutions for Medical Image Analysis", authors:"Hwang S., Kwon N., Hong G.", journal:"Computerized Medical Imaging and Graphics" },
  { year:"2023", title:"Few-Shot Object Detection with Prototype Calibration", authors:"Kim M., Hong G.", journal:"IEEE/CVF International Conference on Computer Vision (ICCV)" },
  { year:"2023", title:"Robust Point Cloud Registration via Deep Learning", authors:"Lee S., Park D., Hong G.", journal:"IEEE Robotics and Automation Letters" },
  { year:"2023", title:"Attention Mechanisms for 3D Scene Reconstruction", authors:"Choi Y., Hong G.", journal:"International Journal of Robotics Research" },
  { year:"2023", title:"Transformer-Based Action Recognition in Videos", authors:"Jung W., Kang J., Hong G.", journal:"Pattern Recognition Letters" },
  { year:"2023", title:"Multi-Task Learning for Autonomous Driving Perception", authors:"Yoon H., Hong G.", journal:"IEEE Transactions on Intelligent Transportation Systems" },
  { year:"2023", title:"Uncertainty Quantification in Deep Neural Networks", authors:"Lim S., Kim M., Hong G.", journal:"Reliability Engineering & System Safety" },
  { year:"2023", title:"Cross-Domain Adaptation with Style Transfer", authors:"Oh J., Hong G.", journal:"Computer Vision and Image Understanding" },
  // 2022
  { year:"2022", title:"Real-Time Semantic Segmentation for Edge Devices", authors:"Bae S., Shin M., Hong G.", journal:"IEEE Transactions on Circuits and Systems for Video Technology" },
  { year:"2022", title:"Generative Adversarial Networks for Data Augmentation", authors:"Ryu G., Hwang S., Hong G.", journal:"Neurocomputing" },
  { year:"2022", title:"Depth Completion from Sparse LiDAR and RGB Images", authors:"Kwon N., Kim M., Hong G.", journal:"ISPRS Journal of Photogrammetry and Remote Sensing" },
  { year:"2022", title:"Instance Segmentation with Anchor-Free Detectors", authors:"Lee S., Hong G.", journal:"IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)" },
  { year:"2022", title:"Self-Supervised Representation Learning for Remote Sensing", authors:"Park D., Choi Y., Hong G.", journal:"Remote Sensing of Environment" },
  { year:"2022", title:"Temporal Graph Networks for Activity Recognition", authors:"Jung W., Hong G.", journal:"ACM Transactions on Multimedia Computing" },
  { year:"2022", title:"Knowledge Distillation for Efficient Object Detection", authors:"Kang J., Yoon H., Hong G.", journal:"Expert Systems with Applications" },
  { year:"2022", title:"Pose Estimation for Industrial Robot Arms", authors:"Lim S., Hong G.", journal:"Robotics and Computer-Integrated Manufacturing" },
  { year:"2022", title:"Neural Architecture Search for Medical Imaging", authors:"Oh J., Hong G.", journal:"Artificial Intelligence in Medicine" },
  { year:"2022", title:"Optical Flow Estimation with Recurrent Networks", authors:"Bae S., Hong G.", journal:"IEEE Transactions on Image Processing" },
  // 2021
  { year:"2021", title:"Panoptic Segmentation with Unified Architecture", authors:"Shin M., Ryu G., Hong G.", journal:"International Journal of Computer Vision" },
  { year:"2021", title:"Model Compression via Lottery Ticket Hypothesis", authors:"Hwang S., Hong G.", journal:"Neural Networks" },
  { year:"2021", title:"Stereo Matching with Disparity Confidence Estimation", authors:"Kwon N., Kim M., Hong G.", journal:"Pattern Recognition" },
  { year:"2021", title:"Generalized Zero-Shot Learning for Image Classification", authors:"Lee S., Park D., Hong G.", journal:"IEEE Transactions on Neural Networks and Learning Systems" },
  { year:"2021", title:"Video Object Detection with Long-Range Temporal Context", authors:"Choi Y., Hong G.", journal:"Computer Vision and Image Understanding" },
  { year:"2021", title:"Domain Randomization for Robotic Grasping", authors:"Jung W., Kang J., Hong G.", journal:"IEEE Robotics and Automation Letters" },
  { year:"2021", title:"Crowd Counting with Density Map Estimation", authors:"Yoon H., Lim S., Hong G.", journal:"Pattern Recognition Letters" },
  { year:"2021", title:"Anomaly Detection in Industrial Inspection", authors:"Oh J., Hong G.", journal:"Expert Systems with Applications" },
  { year:"2021", title:"Lane Detection with Polynomial Curve Fitting", authors:"Bae S., Hong G.", journal:"IEEE Transactions on Intelligent Transportation Systems" },
  { year:"2021", title:"Conditional Image Generation with Semantic Layout", authors:"Shin M., Hong G.", journal:"Neurocomputing" },
  // 2020
  { year:"2020", title:"3D Object Detection from Multi-View Images", authors:"Ryu G., Hwang S., Hong G.", journal:"IEEE Transactions on Pattern Analysis and Machine Intelligence" },
  { year:"2020", title:"Attention-Based Multi-Scale Feature Aggregation", authors:"Kwon N., Kim M., Hong G.", journal:"IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)" },
  { year:"2020", title:"Weakly Supervised Object Localization", authors:"Lee S., Hong G.", journal:"IEEE Transactions on Image Processing" },
  { year:"2020", title:"Single Image Super-Resolution with Feedback Network", authors:"Park D., Choi Y., Hong G.", journal:"Pattern Recognition" },
  { year:"2020", title:"Monocular 3D Human Pose Estimation", authors:"Jung W., Hong G.", journal:"IEEE Transactions on Multimedia" },
  { year:"2020", title:"Visual Question Answering with External Knowledge", authors:"Kang J., Yoon H., Hong G.", journal:"Knowledge-Based Systems" },
  { year:"2020", title:"Pedestrian Detection with Occlusion Handling", authors:"Lim S., Hong G.", journal:"IEEE Transactions on Intelligent Transportation Systems" },
  { year:"2020", title:"Salient Object Detection with Boundary Awareness", authors:"Oh J., Bae S., Hong G.", journal:"IEEE Transactions on Image Processing" },
  { year:"2020", title:"Image Dehazing via Multi-Scale Atmospheric Scattering", authors:"Shin M., Hong G.", journal:"Optics Express" },
  { year:"2020", title:"Text Detection in Natural Scene Images", authors:"Ryu G., Hong G.", journal:"Pattern Recognition Letters" },
  { year:"2020", title:"Point Cloud Completion with Shape Priors", authors:"Hwang S., Kwon N., Hong G.", journal:"IEEE Transactions on Visualization and Computer Graphics" },
  // 2019
  { year:"2019", title:"Face Recognition with Adversarial Domain Adaptation", authors:"Kim M., Lee S., Hong G.", journal:"Pattern Recognition" },
  { year:"2019", title:"Semantic Correspondence with Deep Features", authors:"Park D., Hong G.", journal:"International Journal of Computer Vision" },
  { year:"2019", title:"Video Prediction with Spatio-Temporal LSTM", authors:"Choi Y., Jung W., Hong G.", journal:"Neural Networks" },
  { year:"2019", title:"Camouflaged Object Detection", authors:"Kang J., Hong G.", journal:"IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)" },
  { year:"2019", title:"Shadow Detection and Removal in Images", authors:"Yoon H., Hong G.", journal:"IEEE Transactions on Image Processing" },
  { year:"2019", title:"6-DOF Object Pose Estimation for Manipulation", authors:"Lim S., Oh J., Hong G.", journal:"IEEE Robotics and Automation Letters" },
  { year:"2019", title:"Skeleton-Based Action Recognition via Spatial-Temporal GCN", authors:"Bae S., Hong G.", journal:"Pattern Recognition" },
  { year:"2019", title:"Image Matting with Deep Learning", authors:"Shin M., Ryu G., Hong G.", journal:"IEEE Transactions on Image Processing" },
  { year:"2019", title:"Real-Time Hand Gesture Recognition", authors:"Hwang S., Hong G.", journal:"Expert Systems with Applications" },
  { year:"2019", title:"Multi-Label Image Recognition with Graph Convolution", authors:"Kwon N., Kim M., Hong G.", journal:"Pattern Recognition Letters" },
  { year:"2019", title:"Depth-Aware Video Frame Interpolation", authors:"Lee S., Park D., Hong G.", journal:"IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)" },
];
