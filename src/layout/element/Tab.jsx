import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tab extends Component {
    render() {
        return (
            <main>
            <section class="container stylization maincont">
       
                 <div class="tabs-wrap">
            <h3 class="component-ttl component-ttl-ct"><span>Tabs</span></h3>
            <ul class="fr-pop-tabs sections-show">
                <li><Link data-frpoptab-num="1" data-frpoptab="#frpoptab-tab-1"  to="#" class="active">Tab 1</Link></li>
                <li><Link data-frpoptab-num="2" data-frpoptab="#frpoptab-tab-2"  to="#">Tab 2</Link></li>
                <li><Link data-frpoptab-num="3" data-frpoptab="#frpoptab-tab-3"  to="#">Tab 3</Link></li>
                <li><Link data-frpoptab-num="4" data-frpoptab="#frpoptab-tab-4"  to="#">Tab 4</Link></li>
            </ul>
            <div class="fr-pop-tab-cont">
                <p data-frpoptab-num="1" class="fr-pop-tab-mob active" data-frpoptab="#frpoptab-tab-1">Tab 1</p>
                <div class="fr-pop-tab" id="frpoptab-tab-1">
                    <div class="flex-viewport">
                        Recusandae explicabo architecto eos unde laborum natus omnis dignissimos doloremque voluptatem necessitatibus fugiat aut, pariatur, optio dolor quod sequi repudiandae nihil obcaecati, reiciendis provident? Facere ullam ut voluptatum tenetur cumque rem provident fuga voluptate iste quo laboriosam nulla est distinctio ducimus, deserunt animi, atque culpa non quis quasi beatae architecto itaque. Officia sit nesciunt laborum maiores harum, amet quod necessitatibus, perferendis asperiores quaerat accusamus doloribus magni tenetur quis saepe ullam rem quo quidem.
                        <br/>Non dolore odit, totam voluptates quibusdam veniam sed est beatae quo aspernatur. Rerum tempora expedita, aut, error eligendi dolores suscipit delectus repellendus quas qui soluta, laborum corporis quo sed. Blanditiis assumenda, quaerat eos fugit impedit hic facere. Obcaecati harum, error nobis sapiente enim sed dolor distinctio atque consectetur, saepe ex temporibus nisi laboriosam tempore voluptates quod officiis quisquam libero beatae maiores, pariatur quaerat.
                        <span class="tabs-margin"></span>
                    </div>
                </div>
                <p data-frpoptab-num="2" class="fr-pop-tab-mob" data-frpoptab="#frpoptab-tab-2">Tab 2</p>
                <div class="fr-pop-tab" id="frpoptab-tab-2">
                    <div class="flex-viewport">
                        Dolore recusandae placeat sequi consequuntur ipsa ducimus atque, illo ab sapiente. Suscipit laboriosam dignissimos, neque doloribus delectus adipisci minima deserunt asperiores veniam obcaecati ad, maxime, earum amet nesciunt id, quasi eius atque dolor maiores illo quas repudiandae repellat sit. Amet, saepe? Porro dignissimos at soluta quia aspernatur voluptatum nesciunt quibusdam totam rerum ipsam optio beatae libero deserunt dolor saepe nam harum repellendus, dolore expedita!
                        <br/> Blanditiis eum, earum enim, eos repellat qui voluptatem deserunt, quod animi, sunt similique eligendi? Qui nisi saepe quasi neque, aspernatur corporis sequi molestiae inventore et rem ut repellendus, amet. Ex eius facere nesciunt sit eligendi, dolores qui explicabo dolore, perferendis, maxime pariatur totam! Magnam esse repudiandae recusandae modi.
                        <span class="tabs-margin"></span>
                    </div>
                </div>
                <p data-frpoptab-num="3" class="fr-pop-tab-mob" data-frpoptab="#frpoptab-tab-3">Tab 3</p>
                <div class="fr-pop-tab" id="frpoptab-tab-3">
                    <div class="flex-viewport">
                        Quos iusto libero aspernatur fugit pariatur ex et cupiditate unde ad in, molestias ratione quisquam voluptates voluptatum laboriosam, necessitatibus sint vero velit nobis temporibus animi vel delectus, tempora mollitia. Rem quam quis quidem aperiam libero repellat vitae eum asperiores voluptate nesciunt debitis in excepturi unde, sed enim ab aliquam quae necessitatibus consequatur reprehenderit ducimus, ea at.
                         <br/> Laborum ratione ullam architecto nihil molestiae, et dolore vero illo reiciendis ducimus fuga distinctio magni itaque incidunt obcaecati. Sed aspernatur quibusdam voluptatum! Sunt aliquid libero eum atque, necessitatibus, amet non totam, porro error voluptatibus perferendis voluptatum voluptas doloremque dolore maxime provident dignissimos.
                        <span class="tabs-margin"></span>
                    </div>
                </div>
                <p data-frpoptab-num="4" class="fr-pop-tab-mob" data-frpoptab="#frpoptab-tab-4">Tab 4</p>
                <div class="fr-pop-tab" id="frpoptab-tab-4">
                    <div class="flex-viewport">
                        Perspiciatis ea illo, cupiditate ad, dolor natus dolorem consectetur similique distinctio quidem, vel labore dicta quod. Accusantium excepturi sapiente cumque amet odio dolor, blanditiis ab modi vero, eaque porro odit illum rem consectetur facere nam alias itaque suscipit cupiditate iusto, asperiores quos quod rerum. Quaerat quibusdam obcaecati ipsa qui veritatis dolore totam consequuntur possimus explicabo. Dignissimos eaque consectetur eligendi, voluptatibus saepe alias doloribus magnam exercitationem voluptatem rerum nam, iste tempora pariatur sequi veniam omnis odio molestias fugit. Unde perferendis ullam illum, consequuntur eum, blanditiis, laudantium, pariatur repellat minus quis iste ab assumenda maxime dolorum veritatis. Sunt eos neque earum iste officiis fugit architecto mollitia quod vero.
                        <span class="tabs-margin"></span>
                    </div>
                </div>
            </div>
        </div>
   </section>
   </main>
        
        );
    }
}

export default Tab;