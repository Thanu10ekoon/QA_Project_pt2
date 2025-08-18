/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 382.0, "minX": 0.0, "maxY": 1179.0, "series": [{"data": [[0.0, 382.0], [0.1, 382.0], [0.2, 382.0], [0.3, 382.0], [0.4, 383.0], [0.5, 383.0], [0.6, 383.0], [0.7, 383.0], [0.8, 385.0], [0.9, 385.0], [1.0, 385.0], [1.1, 385.0], [1.2, 385.0], [1.3, 387.0], [1.4, 387.0], [1.5, 387.0], [1.6, 388.0], [1.7, 388.0], [1.8, 388.0], [1.9, 388.0], [2.0, 388.0], [2.1, 388.0], [2.2, 388.0], [2.3, 388.0], [2.4, 388.0], [2.5, 390.0], [2.6, 390.0], [2.7, 390.0], [2.8, 390.0], [2.9, 392.0], [3.0, 392.0], [3.1, 392.0], [3.2, 392.0], [3.3, 392.0], [3.4, 392.0], [3.5, 392.0], [3.6, 392.0], [3.7, 395.0], [3.8, 395.0], [3.9, 395.0], [4.0, 395.0], [4.1, 395.0], [4.2, 395.0], [4.3, 395.0], [4.4, 395.0], [4.5, 395.0], [4.6, 395.0], [4.7, 395.0], [4.8, 395.0], [4.9, 396.0], [5.0, 396.0], [5.1, 396.0], [5.2, 396.0], [5.3, 397.0], [5.4, 397.0], [5.5, 397.0], [5.6, 397.0], [5.7, 398.0], [5.8, 398.0], [5.9, 398.0], [6.0, 398.0], [6.1, 398.0], [6.2, 398.0], [6.3, 398.0], [6.4, 398.0], [6.5, 399.0], [6.6, 399.0], [6.7, 399.0], [6.8, 399.0], [6.9, 399.0], [7.0, 399.0], [7.1, 399.0], [7.2, 399.0], [7.3, 401.0], [7.4, 401.0], [7.5, 401.0], [7.6, 401.0], [7.7, 402.0], [7.8, 402.0], [7.9, 402.0], [8.0, 402.0], [8.1, 402.0], [8.2, 402.0], [8.3, 402.0], [8.4, 402.0], [8.5, 402.0], [8.6, 402.0], [8.7, 402.0], [8.8, 403.0], [8.9, 403.0], [9.0, 403.0], [9.1, 403.0], [9.2, 403.0], [9.3, 403.0], [9.4, 403.0], [9.5, 403.0], [9.6, 403.0], [9.7, 403.0], [9.8, 403.0], [9.9, 403.0], [10.0, 405.0], [10.1, 405.0], [10.2, 405.0], [10.3, 405.0], [10.4, 405.0], [10.5, 405.0], [10.6, 405.0], [10.7, 405.0], [10.8, 406.0], [10.9, 406.0], [11.0, 406.0], [11.1, 406.0], [11.2, 406.0], [11.3, 407.0], [11.4, 407.0], [11.5, 407.0], [11.6, 407.0], [11.7, 408.0], [11.8, 408.0], [11.9, 408.0], [12.0, 408.0], [12.1, 409.0], [12.2, 409.0], [12.3, 409.0], [12.4, 409.0], [12.5, 409.0], [12.6, 409.0], [12.7, 409.0], [12.8, 409.0], [12.9, 410.0], [13.0, 410.0], [13.1, 410.0], [13.2, 410.0], [13.3, 411.0], [13.4, 411.0], [13.5, 411.0], [13.6, 411.0], [13.7, 412.0], [13.8, 412.0], [13.9, 412.0], [14.0, 412.0], [14.1, 412.0], [14.2, 412.0], [14.3, 412.0], [14.4, 412.0], [14.5, 413.0], [14.6, 413.0], [14.7, 413.0], [14.8, 413.0], [14.9, 413.0], [15.0, 413.0], [15.1, 413.0], [15.2, 413.0], [15.3, 414.0], [15.4, 414.0], [15.5, 414.0], [15.6, 414.0], [15.7, 415.0], [15.8, 415.0], [15.9, 415.0], [16.0, 415.0], [16.1, 416.0], [16.2, 416.0], [16.3, 416.0], [16.4, 416.0], [16.5, 417.0], [16.6, 417.0], [16.7, 417.0], [16.8, 418.0], [16.9, 418.0], [17.0, 418.0], [17.1, 418.0], [17.2, 419.0], [17.3, 419.0], [17.4, 419.0], [17.5, 419.0], [17.6, 423.0], [17.7, 423.0], [17.8, 423.0], [17.9, 423.0], [18.0, 423.0], [18.1, 423.0], [18.2, 423.0], [18.3, 423.0], [18.4, 424.0], [18.5, 424.0], [18.6, 424.0], [18.7, 424.0], [18.8, 424.0], [18.9, 424.0], [19.0, 424.0], [19.1, 424.0], [19.2, 425.0], [19.3, 425.0], [19.4, 425.0], [19.5, 425.0], [19.6, 427.0], [19.7, 427.0], [19.8, 427.0], [19.9, 427.0], [20.0, 427.0], [20.1, 427.0], [20.2, 427.0], [20.3, 427.0], [20.4, 428.0], [20.5, 428.0], [20.6, 428.0], [20.7, 428.0], [20.8, 428.0], [20.9, 428.0], [21.0, 428.0], [21.1, 428.0], [21.2, 428.0], [21.3, 428.0], [21.4, 428.0], [21.5, 428.0], [21.6, 428.0], [21.7, 428.0], [21.8, 428.0], [21.9, 428.0], [22.0, 429.0], [22.1, 429.0], [22.2, 429.0], [22.3, 429.0], [22.4, 429.0], [22.5, 429.0], [22.6, 429.0], [22.7, 429.0], [22.8, 430.0], [22.9, 430.0], [23.0, 430.0], [23.1, 430.0], [23.2, 430.0], [23.3, 430.0], [23.4, 430.0], [23.5, 430.0], [23.6, 432.0], [23.7, 432.0], [23.8, 432.0], [23.9, 432.0], [24.0, 432.0], [24.1, 432.0], [24.2, 432.0], [24.3, 432.0], [24.4, 432.0], [24.5, 433.0], [24.6, 433.0], [24.7, 433.0], [24.8, 435.0], [24.9, 435.0], [25.0, 435.0], [25.1, 435.0], [25.2, 436.0], [25.3, 436.0], [25.4, 436.0], [25.5, 436.0], [25.6, 440.0], [25.7, 440.0], [25.8, 440.0], [25.9, 440.0], [26.0, 440.0], [26.1, 440.0], [26.2, 440.0], [26.3, 440.0], [26.4, 440.0], [26.5, 440.0], [26.6, 440.0], [26.7, 440.0], [26.8, 442.0], [26.9, 442.0], [27.0, 442.0], [27.1, 442.0], [27.2, 443.0], [27.3, 443.0], [27.4, 443.0], [27.5, 443.0], [27.6, 444.0], [27.7, 444.0], [27.8, 444.0], [27.9, 444.0], [28.0, 445.0], [28.1, 445.0], [28.2, 445.0], [28.3, 445.0], [28.4, 446.0], [28.5, 446.0], [28.6, 446.0], [28.7, 446.0], [28.8, 447.0], [28.9, 447.0], [29.0, 447.0], [29.1, 447.0], [29.2, 447.0], [29.3, 447.0], [29.4, 447.0], [29.5, 447.0], [29.6, 447.0], [29.7, 447.0], [29.8, 447.0], [29.9, 447.0], [30.0, 448.0], [30.1, 448.0], [30.2, 448.0], [30.3, 448.0], [30.4, 448.0], [30.5, 448.0], [30.6, 448.0], [30.7, 448.0], [30.8, 450.0], [30.9, 450.0], [31.0, 450.0], [31.1, 450.0], [31.2, 450.0], [31.3, 450.0], [31.4, 450.0], [31.5, 450.0], [31.6, 450.0], [31.7, 450.0], [31.8, 450.0], [31.9, 450.0], [32.0, 452.0], [32.1, 452.0], [32.2, 452.0], [32.3, 452.0], [32.4, 452.0], [32.5, 452.0], [32.6, 452.0], [32.7, 452.0], [32.8, 453.0], [32.9, 453.0], [33.0, 453.0], [33.1, 453.0], [33.2, 453.0], [33.3, 453.0], [33.4, 453.0], [33.5, 453.0], [33.6, 453.0], [33.7, 453.0], [33.8, 453.0], [33.9, 453.0], [34.0, 454.0], [34.1, 454.0], [34.2, 454.0], [34.3, 454.0], [34.4, 454.0], [34.5, 454.0], [34.6, 454.0], [34.7, 454.0], [34.8, 454.0], [34.9, 454.0], [35.0, 454.0], [35.1, 454.0], [35.2, 454.0], [35.3, 454.0], [35.4, 454.0], [35.5, 454.0], [35.6, 454.0], [35.7, 454.0], [35.8, 454.0], [35.9, 454.0], [36.0, 454.0], [36.1, 454.0], [36.2, 454.0], [36.3, 454.0], [36.4, 454.0], [36.5, 454.0], [36.6, 454.0], [36.7, 454.0], [36.8, 454.0], [36.9, 454.0], [37.0, 454.0], [37.1, 454.0], [37.2, 455.0], [37.3, 455.0], [37.4, 455.0], [37.5, 455.0], [37.6, 456.0], [37.7, 456.0], [37.8, 456.0], [37.9, 456.0], [38.0, 459.0], [38.1, 459.0], [38.2, 459.0], [38.3, 459.0], [38.4, 460.0], [38.5, 460.0], [38.6, 460.0], [38.7, 460.0], [38.8, 462.0], [38.9, 462.0], [39.0, 462.0], [39.1, 462.0], [39.2, 462.0], [39.3, 462.0], [39.4, 462.0], [39.5, 462.0], [39.6, 462.0], [39.7, 462.0], [39.8, 462.0], [39.9, 462.0], [40.0, 463.0], [40.1, 463.0], [40.2, 463.0], [40.3, 463.0], [40.4, 463.0], [40.5, 463.0], [40.6, 463.0], [40.7, 463.0], [40.8, 464.0], [40.9, 464.0], [41.0, 464.0], [41.1, 464.0], [41.2, 464.0], [41.3, 464.0], [41.4, 464.0], [41.5, 464.0], [41.6, 464.0], [41.7, 464.0], [41.8, 464.0], [41.9, 464.0], [42.0, 465.0], [42.1, 465.0], [42.2, 465.0], [42.3, 465.0], [42.4, 466.0], [42.5, 466.0], [42.6, 466.0], [42.7, 466.0], [42.8, 466.0], [42.9, 466.0], [43.0, 466.0], [43.1, 466.0], [43.2, 467.0], [43.3, 467.0], [43.4, 467.0], [43.5, 467.0], [43.6, 468.0], [43.7, 468.0], [43.8, 468.0], [43.9, 468.0], [44.0, 468.0], [44.1, 468.0], [44.2, 468.0], [44.3, 468.0], [44.4, 468.0], [44.5, 468.0], [44.6, 468.0], [44.7, 468.0], [44.8, 469.0], [44.9, 469.0], [45.0, 469.0], [45.1, 469.0], [45.2, 470.0], [45.3, 470.0], [45.4, 470.0], [45.5, 470.0], [45.6, 471.0], [45.7, 471.0], [45.8, 471.0], [45.9, 471.0], [46.0, 471.0], [46.1, 471.0], [46.2, 471.0], [46.3, 471.0], [46.4, 471.0], [46.5, 471.0], [46.6, 471.0], [46.7, 471.0], [46.8, 471.0], [46.9, 471.0], [47.0, 471.0], [47.1, 471.0], [47.2, 472.0], [47.3, 472.0], [47.4, 472.0], [47.5, 472.0], [47.6, 472.0], [47.7, 472.0], [47.8, 472.0], [47.9, 472.0], [48.0, 472.0], [48.1, 472.0], [48.2, 472.0], [48.3, 472.0], [48.4, 473.0], [48.5, 473.0], [48.6, 473.0], [48.7, 473.0], [48.8, 476.0], [48.9, 476.0], [49.0, 476.0], [49.1, 476.0], [49.2, 477.0], [49.3, 477.0], [49.4, 477.0], [49.5, 477.0], [49.6, 477.0], [49.7, 477.0], [49.8, 477.0], [49.9, 477.0], [50.0, 477.0], [50.1, 477.0], [50.2, 477.0], [50.3, 477.0], [50.4, 477.0], [50.5, 477.0], [50.6, 477.0], [50.7, 477.0], [50.8, 478.0], [50.9, 478.0], [51.0, 478.0], [51.1, 478.0], [51.2, 478.0], [51.3, 478.0], [51.4, 478.0], [51.5, 478.0], [51.6, 479.0], [51.7, 479.0], [51.8, 479.0], [51.9, 479.0], [52.0, 479.0], [52.1, 479.0], [52.2, 479.0], [52.3, 479.0], [52.4, 479.0], [52.5, 479.0], [52.6, 479.0], [52.7, 479.0], [52.8, 480.0], [52.9, 480.0], [53.0, 480.0], [53.1, 480.0], [53.2, 480.0], [53.3, 480.0], [53.4, 480.0], [53.5, 480.0], [53.6, 481.0], [53.7, 481.0], [53.8, 481.0], [53.9, 481.0], [54.0, 482.0], [54.1, 482.0], [54.2, 482.0], [54.3, 482.0], [54.4, 482.0], [54.5, 482.0], [54.6, 482.0], [54.7, 482.0], [54.8, 484.0], [54.9, 484.0], [55.0, 484.0], [55.1, 484.0], [55.2, 487.0], [55.3, 487.0], [55.4, 487.0], [55.5, 487.0], [55.6, 487.0], [55.7, 487.0], [55.8, 487.0], [55.9, 487.0], [56.0, 488.0], [56.1, 488.0], [56.2, 488.0], [56.3, 488.0], [56.4, 488.0], [56.5, 488.0], [56.6, 488.0], [56.7, 488.0], [56.8, 489.0], [56.9, 489.0], [57.0, 489.0], [57.1, 489.0], [57.2, 490.0], [57.3, 490.0], [57.4, 490.0], [57.5, 490.0], [57.6, 490.0], [57.7, 490.0], [57.8, 490.0], [57.9, 490.0], [58.0, 491.0], [58.1, 491.0], [58.2, 491.0], [58.3, 491.0], [58.4, 492.0], [58.5, 492.0], [58.6, 492.0], [58.7, 492.0], [58.8, 492.0], [58.9, 492.0], [59.0, 492.0], [59.1, 492.0], [59.2, 493.0], [59.3, 493.0], [59.4, 493.0], [59.5, 493.0], [59.6, 493.0], [59.7, 493.0], [59.8, 493.0], [59.9, 493.0], [60.0, 495.0], [60.1, 495.0], [60.2, 495.0], [60.3, 495.0], [60.4, 495.0], [60.5, 495.0], [60.6, 495.0], [60.7, 495.0], [60.8, 495.0], [60.9, 495.0], [61.0, 495.0], [61.1, 495.0], [61.2, 496.0], [61.3, 496.0], [61.4, 496.0], [61.5, 496.0], [61.6, 496.0], [61.7, 496.0], [61.8, 496.0], [61.9, 496.0], [62.0, 498.0], [62.1, 498.0], [62.2, 498.0], [62.3, 498.0], [62.4, 498.0], [62.5, 498.0], [62.6, 498.0], [62.7, 498.0], [62.8, 499.0], [62.9, 499.0], [63.0, 499.0], [63.1, 499.0], [63.2, 499.0], [63.3, 499.0], [63.4, 499.0], [63.5, 499.0], [63.6, 501.0], [63.7, 501.0], [63.8, 501.0], [63.9, 501.0], [64.0, 501.0], [64.1, 501.0], [64.2, 501.0], [64.3, 501.0], [64.4, 501.0], [64.5, 501.0], [64.6, 501.0], [64.7, 501.0], [64.8, 501.0], [64.9, 501.0], [65.0, 501.0], [65.1, 501.0], [65.2, 502.0], [65.3, 502.0], [65.4, 502.0], [65.5, 502.0], [65.6, 502.0], [65.7, 502.0], [65.8, 502.0], [65.9, 502.0], [66.0, 504.0], [66.1, 504.0], [66.2, 504.0], [66.3, 504.0], [66.4, 506.0], [66.5, 506.0], [66.6, 506.0], [66.7, 506.0], [66.8, 506.0], [66.9, 506.0], [67.0, 506.0], [67.1, 506.0], [67.2, 507.0], [67.3, 507.0], [67.4, 507.0], [67.5, 507.0], [67.6, 507.0], [67.7, 507.0], [67.8, 507.0], [67.9, 507.0], [68.0, 508.0], [68.1, 508.0], [68.2, 508.0], [68.3, 508.0], [68.4, 508.0], [68.5, 508.0], [68.6, 508.0], [68.7, 508.0], [68.8, 508.0], [68.9, 508.0], [69.0, 508.0], [69.1, 508.0], [69.2, 509.0], [69.3, 509.0], [69.4, 509.0], [69.5, 509.0], [69.6, 509.0], [69.7, 509.0], [69.8, 509.0], [69.9, 509.0], [70.0, 509.0], [70.1, 509.0], [70.2, 509.0], [70.3, 509.0], [70.4, 511.0], [70.5, 511.0], [70.6, 511.0], [70.7, 511.0], [70.8, 513.0], [70.9, 513.0], [71.0, 513.0], [71.1, 513.0], [71.2, 518.0], [71.3, 518.0], [71.4, 518.0], [71.5, 518.0], [71.6, 519.0], [71.7, 519.0], [71.8, 519.0], [71.9, 519.0], [72.0, 519.0], [72.1, 519.0], [72.2, 519.0], [72.3, 519.0], [72.4, 520.0], [72.5, 520.0], [72.6, 520.0], [72.7, 520.0], [72.8, 520.0], [72.9, 520.0], [73.0, 520.0], [73.1, 520.0], [73.2, 521.0], [73.3, 521.0], [73.4, 521.0], [73.5, 521.0], [73.6, 522.0], [73.7, 522.0], [73.8, 522.0], [73.9, 522.0], [74.0, 522.0], [74.1, 522.0], [74.2, 522.0], [74.3, 522.0], [74.4, 523.0], [74.5, 523.0], [74.6, 523.0], [74.7, 523.0], [74.8, 523.0], [74.9, 523.0], [75.0, 523.0], [75.1, 523.0], [75.2, 523.0], [75.3, 523.0], [75.4, 523.0], [75.5, 523.0], [75.6, 524.0], [75.7, 524.0], [75.8, 524.0], [75.9, 524.0], [76.0, 524.0], [76.1, 524.0], [76.2, 524.0], [76.3, 524.0], [76.4, 527.0], [76.5, 527.0], [76.6, 527.0], [76.7, 527.0], [76.8, 531.0], [76.9, 531.0], [77.0, 531.0], [77.1, 531.0], [77.2, 533.0], [77.3, 533.0], [77.4, 533.0], [77.5, 533.0], [77.6, 535.0], [77.7, 535.0], [77.8, 535.0], [77.9, 535.0], [78.0, 542.0], [78.1, 542.0], [78.2, 542.0], [78.3, 542.0], [78.4, 542.0], [78.5, 542.0], [78.6, 542.0], [78.7, 542.0], [78.8, 542.0], [78.9, 542.0], [79.0, 542.0], [79.1, 542.0], [79.2, 547.0], [79.3, 547.0], [79.4, 547.0], [79.5, 547.0], [79.6, 547.0], [79.7, 549.0], [79.8, 549.0], [79.9, 549.0], [80.0, 549.0], [80.1, 551.0], [80.2, 551.0], [80.3, 551.0], [80.4, 551.0], [80.5, 552.0], [80.6, 552.0], [80.7, 552.0], [80.8, 552.0], [80.9, 552.0], [81.0, 552.0], [81.1, 552.0], [81.2, 552.0], [81.3, 553.0], [81.4, 553.0], [81.5, 553.0], [81.6, 553.0], [81.7, 553.0], [81.8, 553.0], [81.9, 553.0], [82.0, 553.0], [82.1, 567.0], [82.2, 567.0], [82.3, 567.0], [82.4, 567.0], [82.5, 569.0], [82.6, 569.0], [82.7, 569.0], [82.8, 569.0], [82.9, 571.0], [83.0, 571.0], [83.1, 571.0], [83.2, 571.0], [83.3, 571.0], [83.4, 571.0], [83.5, 571.0], [83.6, 571.0], [83.7, 574.0], [83.8, 574.0], [83.9, 574.0], [84.0, 574.0], [84.1, 577.0], [84.2, 577.0], [84.3, 577.0], [84.4, 577.0], [84.5, 583.0], [84.6, 583.0], [84.7, 583.0], [84.8, 583.0], [84.9, 593.0], [85.0, 593.0], [85.1, 593.0], [85.2, 593.0], [85.3, 593.0], [85.4, 593.0], [85.5, 593.0], [85.6, 593.0], [85.7, 600.0], [85.8, 600.0], [85.9, 600.0], [86.0, 600.0], [86.1, 603.0], [86.2, 603.0], [86.3, 603.0], [86.4, 603.0], [86.5, 603.0], [86.6, 603.0], [86.7, 603.0], [86.8, 603.0], [86.9, 604.0], [87.0, 604.0], [87.1, 604.0], [87.2, 604.0], [87.3, 606.0], [87.4, 606.0], [87.5, 606.0], [87.6, 606.0], [87.7, 607.0], [87.8, 607.0], [87.9, 607.0], [88.0, 607.0], [88.1, 611.0], [88.2, 611.0], [88.3, 611.0], [88.4, 611.0], [88.5, 625.0], [88.6, 625.0], [88.7, 625.0], [88.8, 625.0], [88.9, 626.0], [89.0, 626.0], [89.1, 626.0], [89.2, 626.0], [89.3, 628.0], [89.4, 628.0], [89.5, 628.0], [89.6, 628.0], [89.7, 632.0], [89.8, 632.0], [89.9, 632.0], [90.0, 632.0], [90.1, 639.0], [90.2, 639.0], [90.3, 639.0], [90.4, 639.0], [90.5, 639.0], [90.6, 639.0], [90.7, 639.0], [90.8, 639.0], [90.9, 640.0], [91.0, 640.0], [91.1, 640.0], [91.2, 640.0], [91.3, 655.0], [91.4, 655.0], [91.5, 655.0], [91.6, 655.0], [91.7, 659.0], [91.8, 659.0], [91.9, 659.0], [92.0, 659.0], [92.1, 670.0], [92.2, 670.0], [92.3, 670.0], [92.4, 670.0], [92.5, 696.0], [92.6, 696.0], [92.7, 696.0], [92.8, 696.0], [92.9, 697.0], [93.0, 697.0], [93.1, 697.0], [93.2, 697.0], [93.3, 702.0], [93.4, 702.0], [93.5, 702.0], [93.6, 702.0], [93.7, 749.0], [93.8, 749.0], [93.9, 749.0], [94.0, 749.0], [94.1, 751.0], [94.2, 751.0], [94.3, 751.0], [94.4, 751.0], [94.5, 758.0], [94.6, 758.0], [94.7, 758.0], [94.8, 758.0], [94.9, 758.0], [95.0, 758.0], [95.1, 758.0], [95.2, 758.0], [95.3, 763.0], [95.4, 763.0], [95.5, 763.0], [95.6, 763.0], [95.7, 798.0], [95.8, 798.0], [95.9, 798.0], [96.0, 798.0], [96.1, 831.0], [96.2, 831.0], [96.3, 831.0], [96.4, 831.0], [96.5, 864.0], [96.6, 864.0], [96.7, 864.0], [96.8, 864.0], [96.9, 933.0], [97.0, 933.0], [97.1, 933.0], [97.2, 933.0], [97.3, 936.0], [97.4, 936.0], [97.5, 936.0], [97.6, 936.0], [97.7, 1078.0], [97.8, 1078.0], [97.9, 1078.0], [98.0, 1078.0], [98.1, 1118.0], [98.2, 1118.0], [98.3, 1118.0], [98.4, 1118.0], [98.5, 1135.0], [98.6, 1135.0], [98.7, 1135.0], [98.8, 1135.0], [98.9, 1135.0], [99.0, 1135.0], [99.1, 1135.0], [99.2, 1135.0], [99.3, 1179.0], [99.4, 1179.0], [99.5, 1179.0], [99.6, 1179.0], [99.7, 1179.0], [99.8, 1179.0], [99.9, 1179.0], [100.0, 1179.0]], "isOverall": false, "label": "GET Events Public", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 141.0, "series": [{"data": [[1100.0, 5.0], [300.0, 18.0], [600.0, 19.0], [700.0, 7.0], [400.0, 141.0], [800.0, 2.0], [900.0, 2.0], [1000.0, 1.0], [500.0, 55.0]], "isOverall": false, "label": "GET Events Public", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 159.0, "series": [{"data": [[0.0, 159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 89.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.2159090909090935, "minX": 1.7555403E12, "maxY": 4.302469135802466, "series": [{"data": [[1.7555403E12, 4.2159090909090935], [1.75554036E12, 4.302469135802466]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75554036E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 425.0, "minX": 1.0, "maxY": 944.25, "series": [{"data": [[2.0, 648.0], [4.0, 476.4044117647056], [1.0, 425.0], [5.0, 528.5909090909089], [3.0, 566.0], [6.0, 944.25]], "isOverall": false, "label": "GET Events Public", "isController": false}, {"data": [[4.272, 510.8920000000002]], "isOverall": false, "label": "GET Events Public-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 196.53333333333333, "minX": 1.7555403E12, "maxY": 4336.4, "series": [{"data": [[1.7555403E12, 2367.2], [1.75554036E12, 4336.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7555403E12, 196.53333333333333], [1.75554036E12, 361.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75554036E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 489.6931818181819, "minX": 1.7555403E12, "maxY": 522.4074074074073, "series": [{"data": [[1.7555403E12, 489.6931818181819], [1.75554036E12, 522.4074074074073]], "isOverall": false, "label": "GET Events Public", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75554036E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 489.6136363636365, "minX": 1.7555403E12, "maxY": 522.3888888888894, "series": [{"data": [[1.7555403E12, 489.6136363636365], [1.75554036E12, 522.3888888888894]], "isOverall": false, "label": "GET Events Public", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75554036E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.14197530864197533, "minX": 1.7555403E12, "maxY": 0.3522727272727272, "series": [{"data": [[1.7555403E12, 0.3522727272727272], [1.75554036E12, 0.14197530864197533]], "isOverall": false, "label": "GET Events Public", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75554036E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 382.0, "minX": 1.7555403E12, "maxY": 1179.0, "series": [{"data": [[1.7555403E12, 1078.0], [1.75554036E12, 1179.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7555403E12, 600.3000000000001], [1.75554036E12, 639.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7555403E12, 1078.0], [1.75554036E12, 1179.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7555403E12, 834.2999999999998], [1.75554036E12, 750.9]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7555403E12, 383.0], [1.75554036E12, 382.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7555403E12, 464.5], [1.75554036E12, 490.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75554036E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 436.0, "minX": 2.0, "maxY": 1005.5, "series": [{"data": [[2.0, 1005.5], [8.0, 479.5], [4.0, 524.0], [9.0, 495.0], [10.0, 447.5], [5.0, 569.0], [6.0, 502.5], [12.0, 436.0], [3.0, 462.0], [7.0, 448.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 797.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 436.0, "minX": 2.0, "maxY": 1003.0, "series": [{"data": [[2.0, 1003.0], [8.0, 479.5], [4.0, 523.5], [9.0, 495.0], [10.0, 447.5], [5.0, 569.0], [6.0, 502.0], [12.0, 436.0], [3.0, 462.0], [7.0, 448.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 797.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.7555403E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.7555403E12, 1.5333333333333334], [1.75554036E12, 2.6333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75554036E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7555403E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.7555403E12, 1.4666666666666666], [1.75554036E12, 2.6666666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.75554036E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75554036E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7555403E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.75554036E12, 0.03333333333333333]], "isOverall": false, "label": "GET Events Public-failure", "isController": false}, {"data": [[1.7555403E12, 1.4666666666666666], [1.75554036E12, 2.6666666666666665]], "isOverall": false, "label": "GET Events Public-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75554036E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7555403E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.7555403E12, 1.4666666666666666], [1.75554036E12, 2.6666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75554036E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75554036E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

