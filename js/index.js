(function() {
  var ShowDate, getUrlVar, load_from_url, prepare_for_reoprt_and_generate, raw_text_html, raw_title, reloadPage, reloadWithQueryStringVars, report_generate,
    _this = this;

  reloadWithQueryStringVars = function(queryStringVars) {
    var currentUrl, existingQueryVars, i, newQueryVar, newQueryVars, newUrl, pair, queryStringVar;
    existingQueryVars = (location.search ? location.search.substring(1).split("&") : []);
    currentUrl = (location.search ? location.href.replace(location.search, "") : location.href);
    newQueryVars = {};
    currentUrl = currentUrl.substr(0, currentUrl.indexOf("#"));
    newUrl = currentUrl + "?";
    if (existingQueryVars.length > 0) {
      i = 0;
      while (i < existingQueryVars.length) {
        pair = existingQueryVars[i].split("=");
        newQueryVars[pair[0]] = pair[1];
        i++;
      }
    }
    if (queryStringVars) {
      for (queryStringVar in queryStringVars) {
        newQueryVars[queryStringVar] = queryStringVars[queryStringVar];
      }
    }
    if (newQueryVars) {
      for (newQueryVar in newQueryVars) {
        newUrl += newQueryVar + "=" + newQueryVars[newQueryVar] + "&";
      }
      newUrl = newUrl.substring(0, newUrl.length - 1);
      return window.location.href = newUrl;
    } else {
      return window.location.href = location.href;
    }
  };

  ShowDate = function(date) {
    var DD, MM, YY, cn, i, s;
    cn = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    s = [];
    YY = date.getFullYear().toString();
    i = 0;
    while (i < YY.length) {
      if (cn[YY.charAt(i)]) {
        s.push(cn[YY.charAt(i)]);
      } else {
        s.push(YY.charAt(i));
      }
      i++;
    }
    s.push("年");
    MM = date.getMonth();
    if (MM < 10) {
      s.push(cn[MM]);
    } else {
      if (MM < 20) {
        s.push("十" + cn[MM % 9]);
      }
    }
    s.push("月");
    DD = date.getDate();
    if (DD < 10) {
      s.push(cn[DD]);
    } else if (DD < 20) {
      s.push("十" + cn[DD % 10]);
    } else {
      s.push("二十" + cn[DD % 10]);
    }
    s.push("日");
    return s.join("");
  };

  getUrlVar = function(key) {
    var result;
    result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
    return result && unescape(result[1]) || "";
  };

  raw_text_html = "<p>行政長官會__org____date__決定，在循序漸進為__decision__市場引入競爭的前提下，原則上批准奇妙__product__有限公司（奇妙__product__）及香港__product__娛樂有限公司（香港__product__娛樂）的__decision__牌照的申請。</p>　　<p>__decision__及__product__發展局發言人今日（__date__）表示，政府增發__decision__牌照，是希望通過良性競爭，盡快為市民提供更多選擇和更高質素的__decision__，並且為相關__decision__人員提供更大事業發展空間。<p>　　<p>政府增發__decision__牌照，是近四十年來第一次，並且為__decision__機構數目增加一倍，由兩個增至四個。</p>　　<p>發言人表示，在制度許可範圍內，政府在有關結果公布後已盡量交代並解釋行會有關決定的準則及理據。</p>　　<p>不過，在公布決定後三個星期以來，政府留意到市民對__org__決定仍有關注，也存有誤解。在維護行政會議制度和不披露三位申請者與兩間現有持牌人的商業敏感資料的前提下，政府藉此機會進一步闡釋有關決定。</p><h3>開放__decision__市場的政策</h3>　　<p>政府一九九八年訂定的開放__decision__市場政策（一九九八年政策），沒有為發牌數量設立上限，但這不能說成只要申請者符合某些基本要求，便必獲發牌。發牌與否，必須先由__decision__及__product__發展局作出建議，再由__org__考慮所有相關因素（包括整體__decision__市場的持續經營環境）後作出決定。<p>　　<p>一九九八年政策至今十五年，沒有改變。<p>　　<p>社會上有意見認為，即使市場不能容納三家新的__decision__，既然有人願意冒虧本的風險辦__decision__，為甚麼不向全部三個申請者發牌？<p>　　<p>首先，__org__在處理新牌照申請時，須考慮公眾利益，包括發新牌對__decision__行業可持續經營的影響。簡而言之，是要考慮新牌數目會否造成過度或惡性競爭，包括可能導致攤薄收入，因而令全部或大部分__decision__在十二年的牌照期內，沒有足夠收入維持有質素而穩定的__product__製作。</p><h3>循序漸進引入競爭</h3>　　<p>根據三個申請者提交的業務計劃和估計，顧問的研究結果顯示，市場應可支持三家機構（包括兩家現有持牌人）持續經營。顧問認為如市場情況理想，則或有可能支持四家機構持續經營，並認為本港__decision__市場將難以支持五家機構持續經營。</p>　　<p>在考慮公眾利益時，行會認為__decision__市場的可持續和穩健發展是重要考慮因素。因此應循序漸進地引入競爭，以免因免費電視台急劇增加而造成負面影響，例如割喉式競爭以致__product__質素下降，最終令公眾得不償失。</p>　　<p>在此前提下，__org__決定現階段在三份申請中批准兩份（但不排除日後因應市場發展再次批准更多__decision__的可能性）。</p>　　<p>就上述對有關法律和政策的理解，__org__在作出決定前，已考慮法律意見，並將「循序漸進」的原則性傾向，正式通知三個牌照申請者，邀請它們在行會作發牌決定前，就該傾向作出申述。而三個申請者的相關申述，亦已提交行會考慮。</p><h3>法律和制度</h3>　　<p>法例規定，行會是__decision__發牌的最終決策機構；同時，行會一直嚴格奉行保密制，政府必須按現有法律和制度辦事，不應因個別事件在事後背離制度。任何人，包括現有持牌人、牌照申請者，如對決定有任何不滿，制度亦賦予有關人士權利，透過公平公正的司法程序進行覆核。</p>　　<p>運用《立法會（權力及特權）條例》（第382章）介入事件，既沒有必要，更令事件政治化，對解決問題根本毫無幫助。</p><h3>發牌考慮的因素和競爭力評審準則</h3>　　<p>有意見認為__your_org__製作的__product__受歡迎，而另外兩個申請者不在發牌前早推出__product__，顯得不及__your_org__積極，因此政府應發牌照給__your_org__。但行會考慮三份申請時，採用十一項因素和四大評審準則。其中在考慮公眾利益時，行會認為應審視__decision__市場的可持續經營情況。</p><p>　　十一項因素為：</p><ul><li>（一）三份申請；</li><li>（二）__decision__管理局呈交的建議；</li><li>（三）《__product__條例》（第562章）的相關規定；</li><li>（四）__decision__管理局發出的《__decision____product__牌照申請指南》中所載述的評核準則；</li><li>（五）整體__decision__市場的持續經營環境；</li><li>（六）顧問就引入新競爭者對__decision__市場競爭環境的影響所作的報告（當中包括對各申請機構競爭力的評估）（顧問報告）；</li><li>（七）相關機構的所有申述／回應、相關文件；</li><li>（八）所有相關的最新發展；</li><li>（九）所有收到的公眾意見；</li><li>（十）政府現行的__product__政策；以及</li><li>（十一）公眾利益。</li></ul>　　<p>顧問建議按四大準則評核三個申請者提交的建議書，此四準則已向申請者披露，並邀請它們在行會作發牌決定前，就這些準則作出申述。</p><p>　　四大準則包括相關申請機構的： </p><ul><li>（一）財政能力；</li><li>（二）__product__投資；</li><li>（三）__product__策略及製作能力；及</li><li>（四）建議服務(__product__)的技術水平。</li><ul>　<p>　就上述四大評核準則，行會所考慮的具體條件如下：</p><p>（一）財政能力：</p><p>包括三個申請者或其相關控股公司的市值及盈利收入、現金流、資產負債比率及申請者將會得到的財政支持；</p><p>（二）__product__投資：</p><p>包括三個申請者的__product__投資、自製__product__投資及非__product__營運成本；</p><p>（三）__product__策略和製作能力：</p><p>包括__product__多元化、__product__對大眾的吸引力、經營__product__相關業務的經驗、製作__product__內容的能力及相關控股公司的觀眾比率。此項準則涵蓋包括各種__product__種類，而不只限於特定__product__。</p><p>（四）技術水平：</p><p>包括申請者的建議運輸網絡安排、預期的服務覆蓋範圍及速度、支援互動服務的技術；</p><h3>整體考慮</h3>　　<p>根據四大評核準則，行會考慮了各項相關因素，包括顧問的相關評核、以及各申請者對顧問報告作出的所有相關申述等。<p>　　<p>__org__成員的評核是整體性的判斷。行會最終認為其他機構整體上較__your_org__優勝，因此原則上批准上述二者的申請。這是審慎和切合循序漸進方式的做法。</p><h3>__product__市場可否做大？</h3>　　<p>在__product__方面，行會有留意不同方面的意見，例如有意見認為發出更多牌照可「做大個餅」，亦有人持相反的意見，認為每一個人能夠__action____product__的時間畢竟有限，不可能無止境的增長。</p>　　<p>我們有必要指出，__decision__市場會受到多項市場因素的影響，難以準確預測其未來發展。因此，在不明朗的情況下，__org__採取了審慎的態度作出決定。</p><h3>審議需時</h3>　　<p>近四十年來第一次為__decision__市場引入競爭，處理有關申請是一項前所未有而艱鉅的任務。自二○一二年一月，就管理局向上屆政府提交的發牌建議，上屆及本屆行政會議共開會十一次討論，過程中亦不斷徵詢律政司及外聘大律師的法律意見，務求符合制度、符合法律、符合政策及符合程序公義。過程中出現的轉折，包括亞洲__product__有限公司（亞公）嘗試以呈請方式，就管理局的建議向__org__提出上訴，__product__有限公司（無公）及後提出司法覆核許可申請等，均需時處理和解決。</p><h3>程序公義</h3>　　<p>審批過程中，__org__已因應情況發展向相關機構（包括申請者及現有持牌人）索取補充資料／邀請作出申述。</p>　　<p>在作出決定前，__org__向所有申請者披露了四份顧問報告，包括顧問根據上述四大評核準則所作的評核，並在英國御用大律師意見的基礎上，給予充足時間和機會讓各申請者作出了多輪回應和申述，整個處理過程符合程序公義。</p><h3>為何作出申述時不容許其修改原有計劃書？</h3>　　<p>首先必須指出，「循序漸進」意向切合一九九八年政策，而所有申請者已獲足夠機會就該意向、顧問報告及評審準則作出回應，有關申述亦已呈交__org__考慮；因此，__org__在作出決定前已有充足資料加以考慮。若申請者在處理過程中可不斷修改計劃書，當局剛考慮完的事項可能立刻又有改變，需要重新考慮，整個處理程序便會沒完沒了。至於不可修改原有計劃書的規定，對所有申請者都一致適用，因此完全公平。</p><h3>傳送方式及服務推展速度</h3>　　<p>其他公司分別建議，租用有合光纖同軸網絡及固定寬頻網絡，傳送建議的__product__服務。由於要求新持牌人以其建議的傳送方式（即固定網絡，並非大氣電波）在開展服務初期即覆蓋全港，技術上的可行性不高。管理局建議應容許新持牌人逐步達到覆蓋全港的目標，而有關建議已獲行會接納。</p>　　<p>事實上，亞公和無亞公由二○○七年年底在開展數碼地面__product__服務時亦獲豁免遵從有關覆蓋全港的規定，以便兩家機構分階段推展各自的數碼__product__網絡。因此，當局認為奇妙__product__及香港__product__娛樂分階段達到覆蓋全港的目標是可以接受的。</p><h3未來工作</h3>　　<p>管理局和政府會按既定程序，要求奇妙__product__及香港__product__娛樂提供所需的額外資料，以及與其討論__org__如稍後決定批准其__decision__牌照申請後，可批給的牌照有何擬議條件。管理局亦會審視奇妙__product__及香港__product__娛樂所提交的額外資料及__decision__牌照申請，並就應否正式向奇妙__product__及香港__product__娛樂批出__decision__牌照，向行會提交建議。</p>　　<p>管理局作出建議後，行會將考慮應否根據《__product__條例》第8(1)及10(1)條，正式向奇妙__product__及香港__product__娛樂批出牌照。在此第二階段，行會會進一步審視奇妙__product__及香港__product__娛樂是否有能力符合牌照準則，以及所提交的__decision__牌照申請涉及的各有關事項，並作出最終決定。</p>　　<p>當局亦會要求取得涵蓋多個事項的補充資料，當中包括用以核實兩家公司「非附屬公司」身分的無實際控制權承諾。所有補充資料將呈交行會，以讓其在第二階段進一步審視奇妙__product__及香港__product__娛樂有否符合所有法定規定及行政發牌條件的能力，並作出最終決定。</p>　　<p>__org__會繼續公正和謹慎地完成__decision__牌照申請的後續工作，盡快完成正式批出兩個__decision__牌照的工作，為市民提供更多更優質的__product__選擇。</p>完<p>__date__ <br>香港時間１６時０４分</p>";

  raw_title = "政府進一步闡釋行會就__decision__牌照申請的決定";

  $().ready(function() {
    var editor;
    return editor = new MediumEditor('.editable');
  });

  report_generate = function(org, your_org, decision, action, product) {
    var report_name, res;
    if (org.length === 0) {
      org = "行會";
    }
    res = raw_text_html.replace(new RegExp("__org__", "g"), org).replace(new RegExp("__your_org__", "g"), your_org).replace(new RegExp("__decision__", "g"), decision).replace(new RegExp("__action__", "g"), action).replace(new RegExp("__product__", "g"), product).replace(new RegExp("__date__", "g"), ShowDate(new Date()));
    $(".report-content").html(res);
    report_name = raw_title.replace(new RegExp("__decision__", "g"), decision);
    return $(".report-name").html(report_name);
  };

  load_from_url = function() {
    var action, decision, org, product, your_org;
    org = unescape(getUrlVar("org"));
    your_org = unescape(getUrlVar("your_org"));
    decision = unescape(getUrlVar("decision"));
    action = unescape(getUrlVar("action"));
    product = unescape(getUrlVar("product"));
    if (org.length > 0 && your_org.length > 0 && decision.length > 0 && action.length > 0 && product.length > 0) {
      $(".panel").hide();
      report_generate(org, your_org, decision, action, product);
      return $(".generated").slideDown();
    }
  };

  prepare_for_reoprt_and_generate = function() {
    var action, decision, org, product, your_org;
    org = $(".org").val();
    your_org = $(".your_org").val();
    decision = $(".decision").val();
    action = $(".action").val();
    product = $(".product").val();
    if (org.length === 0) {
      org = "行會";
    }
    if (your_org.length === 0 || decision.length === 0 || action.length === 0 || product.length === 0) {
      alert("請先填妥申請書");
      return;
    }
    report_generate(org, your_org, decision, action, product);
    $(".panel").slideUp();
    return $(".in-progress").fadeIn().delay(5000).fadeOut(function() {
      return reloadWithQueryStringVars({
        "org": escape(org),
        "your_org": escape(your_org),
        "decision": escape(decision),
        "action": escape(action),
        "product": escape(product)
      });
    });
  };

  reloadPage = function() {
    return window.location.href = window.location.href.split('?')[0];
  };

  $('body .generate').on("click", prepare_for_reoprt_and_generate);

  $('body .reload').on("click", reloadPage);

  $().ready(function() {
    return load_from_url();
  });

}).call(this);
