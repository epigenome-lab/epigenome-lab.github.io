/*  data.js
    ===========================
    Aging Epigenomics Lab – 실제 데이터
    =========================== */

// ── 교수님 정보 ──────────────────────────────────────────
const PROFESSOR = {
  name: "김미랑 (Mirang Kim), Ph.D.",
  title: "Principal Researcher · Aging Convergence Research Center, KRIBB\nProfessor · Department of Functional Genomics, UST",
  photo: "images/people_img/professor.jpg",
  bio: `Dr. Mirang Kim is an investigator specializing in the intersection of genomics and epigenomics. Her research is dedicated to decoding how epigenetic modifications—with a primary emphasis on DNA methylation—govern cellular memory, disease pathogenesis, and the biological process of aging.

Her work has provided critical insights into the molecular drivers of complex diseases, including oncology (gastric and lung cancers), metabolic health (MASLD and MASH), and aging (epigenome editing technology aimed at modulating and reversing aging-related cellular decline).

Her laboratory employs a sophisticated multi-omics approach, integrating high-throughput sequencing data—including RNA-seq, scRNA-seq, ChIP-seq, and ATAC-seq—with advanced bioinformatics to identify novel biomarkers and precision therapeutic targets.`,
  email: "mirang@kribb.re.kr",
  interests: ["DNA Methylation", "Epigenomics", "Aging", "MASLD/MASH", "Multi-omics"],
  education: [
    "Ph.D. in Functional Genomics, University of Science & Technology (UST), Daejeon, Korea (2008)",
    "M.S. in Biochemistry, Yonsei University, Seoul, Korea (1996)",
    "B.S. in Biochemistry, Yeungnam University, Gyeongsan, Korea (1994)",
  ],
};

// ── 연구원 정보 ──────────────────────────────────────────
const MEMBERS = [
  { name: "손현암 (Hyun Ahm Sohn), Ph.D.", role: "Post-Doc", photo: "images/people_img/SohnHyunahm.jpg" },
  { name: "김희진 (Hee-Jin Kim), Ph.D.", role: "Post-Doc", photo: "images/people_img/KimHeejin.jpg" },
  { name: "정효정 (Hyo-Jung Jung)", role: "M.S. Researcher", photo: "images/people_img/JungHyojung.jpg" },
  { name: "고한용 (Hanyong Go)", role: "Ph.D. Student", photo: "images/people_img/GoHanyong.jpg" },
  { name: "정유진 (Yujin Jeong)", role: "Ph.D. Student", photo: "images/people_img/JeongYujin.jpg" },
  { name: "이준민 (Jun Min Lee)", role: "Ph.D. Student", photo: "images/people_img/LeeJunmin.jpg" },
  { name: "권혁원 (Hyuk Won Kwon)", role: "Intern Student", photo: "images/people_img/KwonHyukwon.png" },
];

// ── 졸업생 정보 ──────────────────────────────────────────
const ALUMNI = [
  { name: "허난형 (Nanhyung Huh)", role: "M.S." },
  { name: "허해정 (Hyun Ahm Sohn)", role: "Ph.D." },
  { name: "임현정 (Hyun Jung Lim)", role: "M.S." },
  { name: "신양지 (Yang-Ji Shin)", role: "M.S." },
  { name: "아말 마그디 (Amal Magdy)", role: "M.S." },
  { name: "함기옥 (Keeok Haam)", role: "Post-Doc" },
];

// ── 연구 프로젝트 ─────────────────────────────────────────
const PROJECTS = [
  {
    title: "Development of Innovative Treatment Technology for MASLD",
    tag: "Metabolic Disease · Epigenomics",
    image: "images/research_img/research1.png",
    desc: `This project focuses on developing innovative treatment technologies for Metabolic dysfunction-Associated Steatotic Liver Disease (MASLD) using big data.
We aim to elucidate the molecular mechanisms of MASLD at the epigenomic level, and discover disease biomarkers and therapeutic targets through DNA methylation pattern analysis.
By integrating multi-center clinical data with multi-omics analyses, we propose novel therapeutic strategies based on precision medicine.`,
    tags: ["MASLD", "DNA Methylation", "Multi-omics", "Biomarker"],
    period: "Ongoing",
  },
  {
    title: "SMARTor: Next-Generation Epigenome Editing Technology",
    tag: "Epigenome Editing · Technology Development",
    image: "images/research_img/research2.png",
    desc: `This project focuses on developing SMARTor (Specific Modulation and Activation of Regulatory Targets via optimized reprogramming), a next-generation miniaturized, high-efficiency epigenome editing technology.
We are developing a compact, highly specific epigenome editing platform that overcomes the limitations of conventional CRISPR-based tools, enabling precise modulation of aging- and disease-associated epigenomic changes.`,
    tags: ["Epigenome Editing", "SMARTor", "CRISPR", "Aging"],
    period: "Ongoing",
  },
  {
    title: "MASH Pathogenesis via EZH2 Activation & Epigenetic Reprogramming",
    tag: "Liver Disease · Molecular Biology",
    image: "images/research_img/research3.png",
    desc: `This project investigates the pathogenesis of MASH (Metabolic dysfunction-Associated Steatohepatitis) via EZH2 activation and epigenetic reprogramming.
We analyze the effects of EZH2-mediated H3K27me3 changes on hepatic lipid accumulation and inflammatory responses, and explore therapeutic strategies targeting these mechanisms.`,
    tags: ["MASH", "EZH2", "H3K27me3", "Epigenetic Reprogramming"],
    period: "Ongoing",
  },
];

// ── 갤러리 데이터 ─────────────────────────────────────────
// photo 경로와 date(표시될 연도/날짜)만 입력하면 됩니다
const GALLERY = [
  { date: "2026", photo: "images/gallery_img/gallery_2026.jpg", emoji: "🌸" },
  { date: "2025", photo: "images/gallery_img/gallery_2025.jpg", emoji: "👥" },
  { date: "2024", photo: "images/gallery_img/gallery_2024.jpg", emoji: "👥" },
  { date: "2023", photo: "images/gallery_img/gallery_2023.jpg", emoji: "👥" },
  { date: "2022", photo: "images/gallery_img/gallery_2022.jpg", emoji: "👥" },
  { date: "2021", photo: "images/gallery_img/gallery_2021.jpg", emoji: "👥" },
  { date: "2020", photo: "images/gallery_img/gallery_2020.jpg", emoji: "👥" },
  // 사진 추가 시: { date: "2024. 06", photo: "images/gallery_img/파일명.png", emoji: "📸" },
];

// ── 논문 데이터 (60편) ────────────────────────────────────
const PUBLICATIONS = [
  { year: "2026", title: "DNMT1 Facilitates the Progression of MASLD by Impeding Transcription Mediated by HNF4α and PPARα", authors: "Sohn HA, Go H, An TH, Lee JM, Kim HJ, Haam K, Magdy A, Jung HJ, Shin YJ, Lim HJ, Jeong Y, Bae Y, Jung Y, Park SH, Park KC, Song MJ, Cho EW, Kwon ES, Park JH, Choi M, Hwang GS, Lee DH, Romeo S, Oh KJ, Kim W, Kim M.", journal: "Clin Mol Hepatol. 2026 Jan 27." },
  { year: "2025", title: "Integrative transcriptomic analysis identifies emetine as a promising candidate for overcoming acquired resistance to ALK inhibitors in lung cancer", authors: "Park SM, Haam K, Heo H, Kim D, Kim MJ, Jung HJ, Cha S, Kim M, Lee H.", journal: "Mol Oncol. 2025 Apr;19(4):1155-1169." },
  { year: "2025", title: "Correspondence to editorial on \"DNA methylome analysis reveals epigenetic alteration of complement genes in advanced metabolic dysfunction-associated steatotic liver disease\"", authors: "Magdy A, Kim HJ, Kim W, Kim M.", journal: "Clin Mol Hepatol. 2025 Jan;31(1):e70-e73." },
  { year: "2024", title: "DNA methylome analysis reveals epigenetic alteration of complement genes in advanced metabolic dysfunction-associated steatotic liver disease", authors: "Magdy A, Kim HJ, Go H, Lee JM, Sohn HA, Haam K, Jung HJ, Park JL, Yoo T, Kwon ES, Lee DH, Choi M, Kang KW, Kim W, Kim M.", journal: "Clin Mol Hepatol. 2024 Oct;30(4):824-844." },
  { year: "2023", title: "The infusion of ex vivo, interleukin-15 and -21-activated donor NK cells after haploidentical HCT in high-risk AML and MDS patients — a randomized trial", authors: "Lee KH, Yoon SR, Gong JR, Choi EJ, Kim HS, Park CJ, Yun SC, Park SY, Jung SJ, Kim H, Lee SY, Jung H, Byun JE, Kim M, Kim SY, Kim JH, Lee JH, Lee JH, Choi Y, Park HS, Lee YS, Kang YA, Jeon M, Woo J, Kang H, Baek S, Kim SM, Kim HM, Cho KH, Choi I.", journal: "Leukemia. 2023 Apr;37(4):807-819." },
  { year: "2023", title: "Epigenetic Activation of Tensin 4 Promotes Gastric Cancer Progression", authors: "Heo H, Kim HJ, Haam K, Sohn HA, Shin YJ, Go H, Jung HJ, Kim JH, Lee SI, Song KS, Kim MJ, Lee H, Kwon ES, Kim SY, Kim YS, Kim M.", journal: "Mol Cells. 2023 May 31;46(5):298-308." },
  { year: "2023", title: "Cyclin Y regulates spatial learning and memory flexibility through distinct control of the actin pathway", authors: "Seo J, Hwang H, Sohn H, Cho E, Jung S, Kim S, Um SM, Kim JY, Kang M, Choi Y, Kim JH, Kim M, Kim SY, Lee SK, Ahnn J, Rhim H, Jo DG, Kim E, Park M.", journal: "Mol Psychiatry. 2023 Mar;28(3):1351-1364." },
  { year: "2022", title: "Aberrant Methylation of Somatostatin Receptor 2 Gene Is Initiated in Aged Gastric Mucosa Infected with Helicobacter pylori and Consequential Gene Silencing Is Associated with Establishment of Inflammatory Microenvironment In Vitro Study", authors: "Kim HJ, Park JL, Yoon BH, Haam K, Heo H, Kim JH, Kim SY, Kim M, Kim WH, Lee SI, Song KS, Ahn KS, Kim YS.", journal: "Cancers (Basel). 2022 Dec 14;14(24):6183." },
  { year: "2022", title: "Intermediate cells of in vitro cellular reprogramming and in vivo tissue regeneration require desmoplakin", authors: "Ha J, Kim BS, Min B, Nam J, Lee JG, Lee M, Yoon BH, Choi YH, Im I, Park JS, Choi H, Baek A, Cho SM, Lee MO, Nam KH, Mun JY, Kim M, Kim SY, Son MY, Kang YK, Lee JS, Kim JK, Kim J.", journal: "Sci Adv. 2022 Oct 28;8(43):eabk1239." },
  { year: "2022", title: "DNA methylome and single-cell transcriptome analyses reveal CDA as a potential druggable target for ALK inhibitor-resistant lung cancer therapy", authors: "Heo H, Kim JH, Lim HJ, Kim JH, Kim M, Koh J, Im JY, Kim BK, Won M, Park JH, Shin YJ, Yun MR, Cho BC, Kim YS, Kim SY, Kim M.", journal: "Exp Mol Med. 2022 Aug;54(8):1236-1249." },
  { year: "2021", title: "Protein Arginine Methyltransferase 1 Is Essential for the Meiosis of Male Germ Cells", authors: "Waseem S, Kumar S, Lee K, Yoon BH, Kim M, Kim H, Lee K.", journal: "Int J Mol Sci. 2021 Jul 26;22(15):7951." },
  { year: "2021", title: "STK31 upregulation is associated with chromatin remodeling in gastric cancer and induction of tumorigenicity in a xenograft mouse model", authors: "Bae DH, Kim HJ, Yoon BH, Park JL, Kim M, Kim SK, Kim SY, Lee SI, Song KS, Kim YS.", journal: "Oncol Rep. 2021 Apr;45(4):42." },
  { year: "2020", title: "EZH2 as a Potential Target for NAFLD Therapy", authors: "Lim HJ, Kim M.", journal: "Int J Mol Sci. 2020 Nov 16;21(22):8617." },
  { year: "2020", title: "PRMT1 is Required for the Maintenance of Mature β Cell Identity", authors: "Kim H, Yoon BH, Oh CM, Lee J, Lee K, Song H, Kim E, Yi K, Kim MY, Kim H, Kim YK, Seo EH, Heo H, Kim HJ, Lee J, Suh JM, Koo SH, Seong JK, Kim S, Ju YS, Shong M, Kim M, Kim H.", journal: "Diabetes. 2020 Mar;69(3):355-368." },
  { year: "2020", title: "Methylation of the CDX2 promoter in Helicobacter pylori-infected gastric mucosa increases with age and its rapid demethylation in gastric tumors is associated with upregulated gene expression", authors: "Kim HJ, Seo EH, Bae DH, Haam K, Jang HR, Park JL, Kim JH, Kim M, Kim SY, Jeong HY, Song KS, Kim YS.", journal: "Carcinogenesis. 2020 Oct 15;41(10):1341-1352." },
  { year: "2020", title: "Connectivity map-based drug repositioning of bortezomib to reverse the metastatic effect of GALNT14 in lung cancer", authors: "Kwon OS, Lee H, Kong HJ, Kwon EJ, Park JE, Lee W, Kang S, Kim M, Kim W, Cha HJ.", journal: "Oncogene. 2020 Jun;39(23):4567-4580." },
  { year: "2019", title: "DNA methylation: a cause and consequence of type 2 diabetes", authors: "Kim M.", journal: "Genomics Inform. 2019 Dec;17(4)." },
  { year: "2019", title: "Investigation of Gene Expression and DNA Methylation From Seven Different Brain Regions of a Crab-Eating Monkey as Determined by RNA-Seq and Whole-Genome Bisulfite Sequencing", authors: "Lim WJ, Kim KH, Kim JY, Kim HJ, Kim M, Park JL, Yoon S, Oh JH, Cho JW, Kim YS, Kim N.", journal: "Front Genet. 2019 Jul 26;10:694." },
  { year: "2018", title: "Enhancer Remodeling and MicroRNA Alterations Are Associated with Acquired Resistance to ALK Inhibitors", authors: "Yun MR, Lim SM, Kim SK, Choi HM, Pyo KH, Kim SK, Lee JM, Lee YW, Choi JW, Kim HR, Hong MH, Haam K, Huh N, Kim JH, Kim YS, Shim HS, Soo RA, Shih JY, Yang JC, Kim M, Cho BC.", journal: "Cancer Res. 2018 Jun 15;78(12):3350-3362." },
  { year: "2018", title: "Epigenetic silencing of miR-1271 enhances MEK1 and TEAD4 expression in gastric cancer", authors: "Lim B, Kim HJ, Heo H, Huh N, Baek SJ, Kim JH, Bae DH, Seo EH, Lee SI, Song KS, Kim SY, Kim YS, Kim M.", journal: "Cancer Med. 2018 Jun 4." },
  { year: "2018", title: "Vitamin C Promotes Astrocyte Differentiation Through DNA Hydroxymethylation", authors: "Kim JH, Kim M, He XB, Wulansari N, Yoon BH, Bae DH, Huh N, Kim YS, Lee SH, Kim SY.", journal: "Stem Cells. 2018 Oct;36(10):1578-1588." },
  { year: "2018", title: "Large-scale pharmacogenomics based drug discovery for ITGB3 dependent chemoresistance in mesenchymal lung cancer", authors: "Hong SK, Lee H, Kwon OS, Song NY, Lee HJ, Kang S, Kim JH, Kim M, Kim W, Cha HJ.", journal: "Mol Cancer. 2018 Dec 18;17(1):175." },
  { year: "2018", title: "Whole genome MBD-seq and RRBS analyses reveal that hypermethylation of gastrointestinal hormone receptors is associated with gastric carcinogenesis", authors: "Kim HJ, Kang TW, Haam K, Kim M, Kim SK, Kim SY, Lee SI, Song KS, Jeong HY, Kim YS.", journal: "Exp Mol Med. 2018 Dec 3;50(12):156." },
  { year: "2018", title: "Bcl-2-dependent synthetic lethal interaction of the IDF-11774 with the V0 subunit C of vacuolar ATPase (ATP6V0C) in colorectal cancer", authors: "Kim BK, Nam SW, Min BS, Ban HS, Paik S, Lee K, Im JY, Lee Y, Park JT, Kim SY, Kim M, Lee H, Won M.", journal: "Br J Cancer. 2018 Nov;119(11):1347-1357." },
  { year: "2018", title: "A fluorescent chemical probe CDy9 selectively stains and enables the isolation of live naïve mouse embryonic stem cells", authors: "Cho SJ, Kim KT, Kim JS, Kwon OS, Go YH, Kang NY, Heo H, Kim M, Han DW, Moon SH, Chang YT, Cha HJ.", journal: "Biomaterials. 2018 Oct;180:12-23." },
  { year: "2018", title: "Dynamic Transcriptome, DNA Methylome, and DNA Hydroxymethylome Networks During T-Cell Lineage Commitment", authors: "Yoon BH, Kim M, Kim MH, Kim HJ, Kim JH, Kim JH, Kim J, Kim YS, Lee D, Kang SJ, Kim SY.", journal: "Mol Cells. 2018 Nov 30;41(11):953-963." },
  { year: "2018", title: "Inflammation induces two types of inflammatory dendritic cells in inflamed lymph nodes", authors: "Min J, Yang D, Kim M, Haam K, Yoo A, Choi JH, Schraml BU, Kim YS, Kim D, Kang SJ.", journal: "Exp Mol Med. 2018 Mar 16;50(3):e458." },
  { year: "2017", title: "Dorsal and Ventral Hippocampus Differentiate in Functional Pathways and Differentially Associate with Neurological Disease-Related Genes during Postnatal Development", authors: "Lee AR, Kim JH, Cho E, Kim M, Park M.", journal: "Front Mol Neurosci. 2017 Oct 16;10:331." },
  { year: "2017", title: "DNA methylation: an epigenetic mark of cellular memory", authors: "Kim M, Costello J.", journal: "Experimental & Molecular Medicine. 2017 Apr 28;49(4):e322." },
  { year: "2017", title: "A late-lineage murine neutrophil precursor population exhibits dynamic changes during demand-adapted granulopoiesis", authors: "Kim MH, Yang D, Kim M, Kim SY, Kim D, Kang SJ.", journal: "Scientific Reports. 2017 Jan;7:39804." },
  { year: "2016", title: "Specific expression and methylation of SLIT1, SLIT2, SLIT3, and miR-218 in gastric cancer subtypes", authors: "Kim M, Kim JH, Baek SJ, Kim SY, Kim YS.", journal: "Int J Oncol. 2016 Jun;48(6):2497-507." },
  { year: "2016", title: "Integrated epigenomic analyses of enhancer as well as promoter regions in gastric cancer", authors: "Baek SJ, Kim M, Bae DH, Kim JH, Kim HJ, Han ME, Oh SO, Kim YS, Kim SY.", journal: "Oncotarget. 2016 May 3;7(18):25620-31." },
  { year: "2016", title: "Genomic and epigenomic heterogeneity in molecular subtypes of gastric cancer", authors: "Lim B, Kim JH, Kim M, Kim SY.", journal: "World J Gastroenterol. 2016 Jan 21;22(3):1190-201." },
  { year: "2015", title: "Cell-Free miR-27a, a Potential Diagnostic and Prognostic Biomarker for Gastric Cancer", authors: "Park JL, Kim M, Song KS, Kim SY, Kim YS.", journal: "Genomics Inform. 2015 Sep;13(3):70-5." },
  { year: "2015", title: "Decrease of 5hmC in gastric cancers is associated with TET1 silencing due to with DNA methylation and bivalent histone marks at TET1 CpG island 3'-shore", authors: "Park JL, Kim HJ, Seo EH, Kwon OH, Lim B, Kim M, Kim SY, Song KS, Kang GH, Kim HJ, Choi BY, Kim YS.", journal: "Oncotarget. 2015 Nov 10;6(35):37647-62." },
  { year: "2015", title: "Vitamin C facilitates dopamine neuron differentiation in fetal midbrain through TET1- and JMJD3-dependent epigenetic control manner", authors: "He XB, Kim M, Kim SY, Yi SH, Rhee YH, Kim T, Lee EH, Park CH, Dixit S, Harrison FE, Lee SH.", journal: "Stem Cells. 2015 Apr;33(4):1320-32." },
  { year: "2014", title: "Epigenetic silencing of BTB and CNC homology 2 and concerted promoter CpG methylation in gastric cancer", authors: "Haam K, Kim HJ, Lee KT, Kim JH, Kim M, Kim SY, Noh SM, Song KS, Kim YS.", journal: "Cancer Lett. 2014 Sep 1;351(2):206-14." },
  { year: "2014", title: "Dynamic changes in DNA methylation and hydroxymethylation when hES cells undergo differentiation toward a neuronal lineage", authors: "Kim M, Park YK, Kang TW, Lee SH, Rhee YH, Park JL, Kim HJ, Lee D, Lee D, Kim SY, Kim YS.", journal: "Hum Mol Genet. 2014 Feb 1;23(3):657-67." },
  { year: "2012", title: "Human histone H3K79 methyltransferase DOT1L protein binds actively transcribing RNA polymerase II to regulate gene expression", authors: "Kim SK, Jung I, Lee H, Kang K, Kim M, Jeong K, Kwon CS, Han YM, Kim YS, Kim D, Lee D.", journal: "J Biol Chem. 2012 Nov 16;287(47):39698-709." },
  { year: "2012", title: "Pyruvate kinase M2 promotes the growth of gastric cancer cells via regulation of Bcl-xL expression at transcriptional level", authors: "Kwon OH, Kang TW, Kim JH, Kim M, Noh SM, Song KS, Yoo HS, Kim WH, Xie Z, Pocalyko D, Kim SY, Kim YS.", journal: "Biochem Biophys Res Commun. 2012 Jun 22;423(1):38-44." },
  { year: "2012", title: "Epigenetic alteration of CCDC67 and its tumor suppressor function in gastric cancer", authors: "Park SJ, Jang HR, Kim M, Kim JH, Kwon OH, Park JL, Noh SM, Song KS, Kim SY, Kim YH, Kim YS.", journal: "Carcinogenesis. 2012 Aug;33(8):1494-501." },
  { year: "2012", title: "H2B monoubiquitylation is a 5'-enriched active transcription mark and correlates with exon-intron structure in human cells", authors: "Jung I, Kim SK, Kim M, Han YM, Kim YS, Kim D, Lee D.", journal: "Genome Res. 2012 Jun;22(6):1026-35." },
  { year: "2012", title: "Identification of potential serum biomarkers for gastric cancer by a novel computational method, multiple normal tissues corrected differential analysis", authors: "Kim M, Kim HJ, Choi BY, Kim JH, Song KS, Noh SM, Kim JC, Han DS, Kim SY, Kim YS.", journal: "Clin Chim Acta. 2012 Feb 18;413(3-4):428-33." },
  { year: "2012", title: "Elevated fibroblast growth factor-inducible 14 expression promotes gastric cancer growth via nuclear factor-κB and is associated with poor patient outcome", authors: "Kwon OH, Park SJ, Kang TW, Kim M, Kim JH, Noh SM, Song KS, Yoo HS, Wang Y, Pocalyko D, Paik SG, Kim YH, Kim SY, Kim YS.", journal: "Cancer Lett. 2012 Jan 1;314(1):73-81." },
  { year: "2011", title: "Epigenetic regulation of microRNA-10b and targeting of oncogenic MAPRE1 in gastric cancer", authors: "Kim K, Lee HC, Park JL, Kim M, Kim SY, Noh SM, Song KS, Kim JC, Kim YS.", journal: "Epigenetics. 2011 Jun;6(6):740-51." },
  { year: "2011", title: "Identification of DNA methylation markers for lineage commitment of in vitro hepatogenesis", authors: "Kim M, Kang TW, Lee HC, Han YM, Kim H, Shin HD, Cheong HS, Lee D, Kim SY, Kim YS.", journal: "Hum Mol Genet. 2011 Jul 15;20(14):2722-33." },
  { year: "2011", title: "Aberrant up-regulation of LAMB3 and LAMC2 by promoter demethylation in gastric cancer", authors: "Kwon OH, Park JL, Kim M, Kim JH, Lee HC, Kim HJ, Noh SM, Song KS, Yoo HS, Paik SG, Kim SY, Kim YS.", journal: "Biochem Biophys Res Commun. 2011 Mar 25;406(4):539-45." },
  { year: "2010", title: "Frequent silencing of popeye domain-containing genes, BVES and POPDC3, is associated with promoter hypermethylation in gastric cancer", authors: "Kim M, Jang HR, Haam K, Kang TW, Kim JH, Kim SY, Noh SM, Song KS, Cho JS, Jeong HY, Kim JC, Yoo HS, Kim YS.", journal: "Carcinogenesis. 2010 Sep;31(9):1685-93." },
  { year: "2010", title: "Expression profiling of calcium induced genes in cultured human keratinocytes", authors: "Lee JS, Kim M, Kim NS, Kim YS, Yang JM, Cho AY, Lee Y, Kim CD, Lee JH.", journal: "J Korean Med Sci. 2010 Apr;25(4):619-25." },
  { year: "2008", title: "LRRC3B, encoding a leucine-rich repeat-containing protein, is a putative tumor suppressor gene in gastric cancer", authors: "Kim M, Kim JH, Jang HR, Kim HM, Lee CW, Noh SM, Song KS, Cho JS, Jeong HY, Hahn Y, Yeom YI, Yoo HS, Kim YS.", journal: "Cancer Res. 2008 Sep 1;68(17):7147-55." },
  { year: "2008", title: "CpG methylation in exon 1 of transcription factor 4 increases with age in normal gastric mucosa and is associated with gene silencing in intestinal-type gastric cancers", authors: "Kim SK, Jang HR, Kim JH, Kim M, Noh SM, Song KS, Kang GH, Kim HJ, Kim SY, Yoo HS, Kim YS.", journal: "Carcinogenesis. 2008 Aug;29(8):1623-31." },
  { year: "2008", title: "Epigenetic down-regulation and suppressive role of DCBLD2 in gastric cancer cell proliferation and invasion", authors: "Kim M, Lee KT, Jang HR, Kim JH, Noh SM, Song KS, Cho JS, Jeong HY, Kim SY, Yoo HS, Kim YS.", journal: "Mol Cancer Res. 2008 Feb;6(2):222-30." },
  { year: "2008", title: "Epigenetic inactivation of protein kinase D1 in gastric cancer and its role in gastric cancer cell migration and invasion", authors: "Kim M, Jang HR, Kim JH, Noh SM, Song KS, Cho JS, Jeong HY, Norman JC, Caswell PT, Kang GH, Kim SY, Yoo HS, Kim YS.", journal: "Carcinogenesis. 2008 Mar;29(3):629-37." },
  { year: "2006", title: "The epigenetic silencing of LIMS2 in gastric cancer and its inhibitory effect on cell migration", authors: "Kim SK, Jang HR, Kim JH, Noh SM, Song KS, Kim M, Kim SY, Yeom YI, Kim NS, Yoo HS, Kim YS.", journal: "Biochem Biophys Res Commun. 2006 Oct 27;349(3):1032-40." },
  { year: "2006", title: "Identification of intrahepatic cholangiocarcinoma related genes by comparison with normal liver tissues using expressed sequence tags", authors: "Wang AG, Yoon SY, Oh JH, Jeon YJ, Kim M, Kim JM, Byun SS, Yang JO, Kim JH, Kim DG, Yeom YI, Yoo HS, Kim YS, Kim NS.", journal: "Biochem Biophys Res Commun. 2006 Jul 7;345(3):1022-32." },
  { year: "2005", title: "Transcriptome analysis of human gastric cancer", authors: "Oh JH, Yang JO, Hahn Y, Kim M, Byun SS, Jeon YJ, Kim JM, Song KS, Noh SM, Kim S, Yoo HS, Kim YS, Kim NS.", journal: "Mamm Genome. 2005 Dec;16(12):942-54." },
  { year: "2005", title: "Gender-dependent hepatic alterations in H-ras12V transgenic mice", authors: "Wang AG, Moon HB, Lee MR, Hwang CY, Kwon KS, Yu SL, Kim YS, Kim M, Kim JM, Kim SK, Lee TH, Moon EY, Lee DS, Yu DY.", journal: "J Hepatol. 2005 Nov;43(5):836-44." },
  { year: "2002", title: "Characterization of the 5'-flanking region of the human PTK6 gene", authors: "Kang KN, Kim M, Pae KM, Lee ST.", journal: "Biochim Biophys Acta. 2002 Apr 12;1574(3):365-9." },
  { year: "1998", title: "Exon-intron structure of the human PTK6 gene demonstrates that PTK6 constitutes a distinct family of non-receptor tyrosine kinase", authors: "Lee H, Kim M, Lee KH, Kang KN, Lee ST.", journal: "Mol Cells. 1998 Aug 31;8(4):401-7." },
];