import React from 'react';

const Body4 = () => {
    return (
        <>
            <main>
                <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>عنوان المثال.</h1>
                                    <p className="opacity-75">تشير الدراسات الإحصائية حسب الجمعية الأمريكية للغات بأن الإقبال على العربية زاد %126 في الولايات المتحدة الأمريكية وحدها بين عامي 2002 و2009م.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">سجل اليوم</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>عنوان مثال آخر.</h1>
                                    <p>حسب المجلس الثقافي البريطاني فإن تعليم الإنجليزية داخل بريطانيا يسهم في تعزيز اقتصادها بما يتجاوز ملياري جنيه سنوياً، كما أنه وفر أكثر من 26 ألف وظيفة.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">أعرف أكثر</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>واحد أكثر لقياس جيد.</h1>
                                    <p>الإحصاءات لحجم الاستثمار اللغوي خارج بريطانيا تتفاوت من سنة لأخرى إلا أن المدير التنفيذي للمجلس الثقافي البريطاني إدي بايرز يرى أن استثمار تعليم الإنجليزية في الخارج لا يحسب على المستوى المالي فحسب بل على المستوى السياسي أيضاً.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">تصفح المعرض</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">السابق</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">التالي</span>
                    </button>
                </div>

                <div className="container marketing">
                    <div className="row">
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                            <h2 className="fw-normal">عنوان</h2>
                            <p>تذكر دائماً أن الحاسوب لا يمتلك ذكاءً، ولكنه يكتسب الذكاء الاصطناعي من خلال ثلاثة عناصر وظيفية رئيسة، هي: القدرة على التحليل، والقدرة على التأليف، والاستدلال المنطقي.</p>
                            <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                            <h2 className="fw-normal">عنوان آخر</h2>
                            <p>إذا أردنا استخدام الحاسوب الذكي في معالجة اللغة العربية فإننا نجد أنفسنا أمام تحدٍّ كبير، خاصة وأن لغتنا تمتاز بتماسك منظوماتها وتداخلها، ومع ذلك فإن الذكاء الاصطناعي يمكّننا من الحصول على أربعة أنواع من المعالجة، هي: المعالجة الصوتية، والمعالجة الصرفية، والمعالجة النحوية، والمعالجة الدلالية.</p>
                            <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                            <h2 className="fw-normal">عنوان ثالث لتأكيد المعلومة</h2>
                            <p>بفضل بحوث الذكاء الاصطناعي وتقنياته استطعنا الانتقال من مرحلة التعامل مع الفيزيائي إلى مرحلة التعامل مع المنطقي، وقد انعكس هذا الانتقال بصورة إيجابية على الكيفية التي تتعامل بها الشعوب مع لغاتها الحيَّة، وهذا يعني أنه يجب أن ينعكس بصورة إيجابية على كيفية تعاملنا مع لغتنا العربية.</p>
                            <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
                        </div>
                    </div>


                    <hr className="featurette-divider"></hr>

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">العنوان الأول المميز. <span className="text-body-secondary"> سيذهل عقلك. </span></h2>
                            <p className="lead">وجه الإنسان هو جزء معقَّد ومتميِّز للغاية من جسمه. وفي الواقع، إنه أحد أكثر أنظمة الإشارات المتاحة تعقيداً لدينا؛ فهو يتضمَّن أكثر من 40 عضلة مستقلة هيكلياً ووظيفياً، بحيث يمكن تشغيل كل منها بشكل مستقل عن البعض الآخر؛ وتشكِّل أحد أقوى مؤشرات العواطف.</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                        </div>
                    </div>

                    <hr className="featurette-divider"></hr>

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading fw-normal lh-1">أوه نعم، هذا جيد. <span className="text-body-secondary"> شاهد بنفسك. </span></h2>
                            <p className="lead">عندما نضحك أو نبكي، فإننا نعرض عواطفنا، مما يسمح للآخرين بإلقاء نظرة خاطفة على أذهاننا أثناء "قراءة" وجوهنا بناءً على التغييرات في مكوّنات الوجه الرئيسة، مثل: العينين والحاجبين والجفنين والأنف والشفتين.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                        </div>
                    </div>

                    <hr className="featurette-divider"></hr>

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">وأخيرًا، هذا. <span className="text-body-secondary"> كش ملك. </span></h2>
                            <p className="lead">إن جميع العضلات في أجسامنا مدعمة بالأعصاب المتصلة من كافة أنحاء الجسم بالنخاع الشوكي والدماغ. وهذا الاتصال العصبي هو ثنائي الاتجاه، أي إن العصب يتسبَّب في تقلصات العضلات بناءً على إشارات الدماغ، ويقوم في الوقت نفسه بإرسال معلومات عن حالة العضلات إلى الدماغ</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                        </div>
                    </div>

                    <hr className="featurette-divider"></hr>

                </div>
            </main>

        </>
    );
};

export default Body4;
