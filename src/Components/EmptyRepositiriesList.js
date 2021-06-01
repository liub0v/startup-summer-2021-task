import React from 'react'

export const RepositoriesNotFound = () => {

    return (
        <div className="message">
            <svg width="243" height="165" viewBox="0 0 243 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.13672 158H4.07422V151.75H7.57422C7.71484 151.75 7.84766 151.75 7.98047 151.742L11.3555 158H13.6055L9.98828 151.391C12.0273 150.695 12.9805 149.031 12.9805 146.906C12.9805 144.078 11.293 142 7.54297 142H2.13672V158ZM4.07422 150V143.719H7.48047C10.0742 143.719 11.0742 144.984 11.0742 146.906C11.0742 148.828 10.0742 150 7.51172 150H4.07422ZM20.8613 158.25C23.2988 158.25 25.0801 157.031 25.6426 155.219L23.8613 154.719C23.3926 155.969 22.3066 156.594 20.8613 156.594C18.6973 156.594 17.2051 155.195 17.1191 152.625H25.8301V151.844C25.8301 147.375 23.1738 145.844 20.6738 145.844C17.4238 145.844 15.2676 148.406 15.2676 152.094C15.2676 155.781 17.3926 158.25 20.8613 158.25ZM17.1191 151.031C17.2441 149.164 18.5645 147.5 20.6738 147.5C22.6738 147.5 23.9551 149 23.9551 151.031H17.1191ZM28.6348 162.5H30.4785V156.156H30.6348C31.041 156.812 31.8223 158.25 34.1348 158.25C37.1348 158.25 39.2285 155.844 39.2285 152.031C39.2285 148.25 37.1348 145.844 34.1035 145.844C31.7598 145.844 31.041 147.281 30.6348 147.906H30.416V146H28.6348V162.5ZM30.4473 152C30.4473 149.312 31.6348 147.5 33.8848 147.5C36.2285 147.5 37.3848 149.469 37.3848 152C37.3848 154.562 36.1973 156.594 33.8848 156.594C31.666 156.594 30.4473 154.719 30.4473 152ZM46.916 158.25C50.166 158.25 52.3535 155.781 52.3535 152.062C52.3535 148.312 50.166 145.844 46.916 145.844C43.666 145.844 41.4785 148.312 41.4785 152.062C41.4785 155.781 43.666 158.25 46.916 158.25ZM46.916 156.594C44.4473 156.594 43.3223 154.469 43.3223 152.062C43.3223 149.656 44.4473 147.5 46.916 147.5C49.3848 147.5 50.5098 149.656 50.5098 152.062C50.5098 154.469 49.3848 156.594 46.916 156.594ZM63.668 148.687C63.0898 146.984 61.793 145.844 59.418 145.844C56.8867 145.844 55.0117 147.281 55.0117 149.312C55.0117 150.969 55.9961 152.078 58.1992 152.594L60.1992 153.062C61.4102 153.344 61.9805 153.922 61.9805 154.75C61.9805 155.781 60.8867 156.625 59.168 156.625C57.6602 156.625 56.7148 155.977 56.3867 154.687L54.6367 155.125C55.0664 157.164 56.7461 158.25 59.1992 158.25C61.9883 158.25 63.8867 156.727 63.8867 154.656C63.8867 152.984 62.8398 151.93 60.6992 151.406L58.918 150.969C57.4961 150.617 56.8555 150.141 56.8555 149.219C56.8555 148.187 57.9492 147.437 59.418 147.437C61.0273 147.437 61.6914 148.328 62.0117 149.156L63.668 148.687ZM66.6621 158H68.5059V146H66.6621V158ZM67.5996 144C68.3184 144 68.9121 143.438 68.9121 142.75C68.9121 142.063 68.3184 141.5 67.5996 141.5C66.8809 141.5 66.2871 142.063 66.2871 142.75C66.2871 143.438 66.8809 144 67.5996 144ZM77.1016 146H74.5391V143.125H72.6953V146H70.8828V147.562H72.6953V155.062C72.6953 157.156 74.3828 158.156 75.9453 158.156C76.6328 158.156 77.0703 158.031 77.3203 157.937L76.9453 156.281C76.7891 156.312 76.5391 156.375 76.1328 156.375C75.3203 156.375 74.5391 156.125 74.5391 154.562V147.562H77.1016V146ZM84.6211 158.25C87.8711 158.25 90.0586 155.781 90.0586 152.062C90.0586 148.312 87.8711 145.844 84.6211 145.844C81.3711 145.844 79.1836 148.312 79.1836 152.062C79.1836 155.781 81.3711 158.25 84.6211 158.25ZM84.6211 156.594C82.1523 156.594 81.0273 154.469 81.0273 152.062C81.0273 149.656 82.1523 147.5 84.6211 147.5C87.0898 147.5 88.2148 149.656 88.2148 152.062C88.2148 154.469 87.0898 156.594 84.6211 156.594ZM92.873 158H94.7168V150.406C94.7168 148.781 95.998 147.594 97.748 147.594C98.2402 147.594 98.748 147.688 98.873 147.719V145.844C98.6621 145.828 98.1777 145.812 97.9043 145.812C96.4668 145.812 95.2168 146.625 94.7793 147.812H94.6543V146H92.873V158ZM102.611 162.5C104.275 162.5 105.447 161.617 106.143 159.75L111.252 146.031L109.236 146L105.924 155.562H105.799L102.486 146H100.486L104.924 158.063L104.58 159C103.908 160.828 103.08 161 101.736 160.656L101.268 162.281C101.455 162.375 101.986 162.5 102.611 162.5ZM121.723 142H119.879V158H121.723V142ZM125.1 158H126.943V146H125.1V158ZM126.037 144C126.756 144 127.35 143.438 127.35 142.75C127.35 142.063 126.756 141.5 126.037 141.5C125.318 141.5 124.725 142.063 124.725 142.75C124.725 143.438 125.318 144 126.037 144ZM138.82 148.687C138.242 146.984 136.945 145.844 134.57 145.844C132.039 145.844 130.164 147.281 130.164 149.312C130.164 150.969 131.148 152.078 133.352 152.594L135.352 153.062C136.563 153.344 137.133 153.922 137.133 154.75C137.133 155.781 136.039 156.625 134.32 156.625C132.813 156.625 131.867 155.977 131.539 154.687L129.789 155.125C130.219 157.164 131.898 158.25 134.352 158.25C137.141 158.25 139.039 156.727 139.039 154.656C139.039 152.984 137.992 151.93 135.852 151.406L134.07 150.969C132.648 150.617 132.008 150.141 132.008 149.219C132.008 148.187 133.102 147.437 134.57 147.437C136.18 147.437 136.844 148.328 137.164 149.156L138.82 148.687ZM147.033 146H144.471V143.125H142.627V146H140.814V147.562H142.627V155.062C142.627 157.156 144.314 158.156 145.877 158.156C146.564 158.156 147.002 158.031 147.252 157.937L146.877 156.281C146.721 156.312 146.471 156.375 146.064 156.375C145.252 156.375 144.471 156.125 144.471 154.562V147.562H147.033V146ZM155.994 158H157.838V146H155.994V158ZM156.932 144C157.65 144 158.244 143.438 158.244 142.75C158.244 142.063 157.65 141.5 156.932 141.5C156.213 141.5 155.619 142.063 155.619 142.75C155.619 143.438 156.213 144 156.932 144ZM169.715 148.687C169.137 146.984 167.84 145.844 165.465 145.844C162.934 145.844 161.059 147.281 161.059 149.312C161.059 150.969 162.043 152.078 164.246 152.594L166.246 153.062C167.457 153.344 168.027 153.922 168.027 154.75C168.027 155.781 166.934 156.625 165.215 156.625C163.707 156.625 162.762 155.977 162.434 154.687L160.684 155.125C161.113 157.164 162.793 158.25 165.246 158.25C168.035 158.25 169.934 156.727 169.934 154.656C169.934 152.984 168.887 151.93 166.746 151.406L164.965 150.969C163.543 150.617 162.902 150.141 162.902 149.219C162.902 148.187 163.996 147.437 165.465 147.437C167.074 147.437 167.738 148.328 168.059 149.156L169.715 148.687ZM183.928 158.25C186.365 158.25 188.146 157.031 188.709 155.219L186.928 154.719C186.459 155.969 185.373 156.594 183.928 156.594C181.764 156.594 180.271 155.195 180.186 152.625H188.896V151.844C188.896 147.375 186.24 145.844 183.74 145.844C180.49 145.844 178.334 148.406 178.334 152.094C178.334 155.781 180.459 158.25 183.928 158.25ZM180.186 151.031C180.311 149.164 181.631 147.5 183.74 147.5C185.74 147.5 187.021 149 187.021 151.031H180.186ZM191.701 158H193.545V150.5C193.545 148.742 194.826 147.5 196.264 147.5C197.662 147.5 198.639 148.414 198.639 149.781V158H200.514V150.187C200.514 148.641 201.482 147.5 203.17 147.5C204.482 147.5 205.607 148.195 205.607 149.969V158H207.451V149.969C207.451 147.148 205.936 145.844 203.795 145.844C202.076 145.844 200.818 146.633 200.201 147.875H200.076C199.482 146.594 198.436 145.844 196.857 145.844C195.295 145.844 194.139 146.594 193.639 147.875H193.482V146H191.701V158ZM210.822 162.5H212.666V156.156H212.822C213.229 156.812 214.01 158.25 216.322 158.25C219.322 158.25 221.416 155.844 221.416 152.031C221.416 148.25 219.322 145.844 216.291 145.844C213.947 145.844 213.229 147.281 212.822 147.906H212.604V146H210.822V162.5ZM212.635 152C212.635 149.312 213.822 147.5 216.072 147.5C218.416 147.5 219.572 149.469 219.572 152C219.572 154.562 218.385 156.594 216.072 156.594C213.854 156.594 212.635 154.719 212.635 152ZM229.447 146H226.885V143.125H225.041V146H223.229V147.562H225.041V155.062C225.041 157.156 226.729 158.156 228.291 158.156C228.979 158.156 229.416 158.031 229.666 157.937L229.291 156.281C229.135 156.312 228.885 156.375 228.479 156.375C227.666 156.375 226.885 156.125 226.885 154.562V147.562H229.447V146ZM233.408 162.5C235.072 162.5 236.244 161.617 236.939 159.75L242.049 146.031L240.033 146L236.721 155.562H236.596L233.283 146H231.283L235.721 158.063L235.377 159C234.705 160.828 233.877 161 232.533 160.656L232.064 162.281C232.252 162.375 232.783 162.5 233.408 162.5Z"
                    fill="#808080"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M98.5 24C90.4919 24 84 30.4919 84 38.5V71.5C84 79.5081 90.4919 86 98.5 86H145.5C153.508 86 160 79.5081 160 71.5V38.5C160 30.4919 153.508 24 145.5 24H98.5ZM93 38.5C93 35.4624 95.4624 33 98.5 33H145.5C148.538 33 151 35.4624 151 38.5V71.5C151 74.5376 148.538 77 145.5 77H98.5C95.4624 77 93 74.5376 93 71.5V38.5ZM132.198 48.6422C133.37 47.4706 133.37 45.5711 132.198 44.3995C131.027 43.228 129.127 43.228 127.956 44.3995L122.299 50.0564L116.642 44.3995C115.47 43.228 113.571 43.228 112.399 44.3995C111.228 45.5711 111.228 47.4706 112.399 48.6422L118.056 54.299L112.399 59.9559C111.228 61.1274 111.228 63.0269 112.399 64.1985C113.571 65.3701 115.47 65.3701 116.642 64.1985L122.299 58.5417L127.956 64.1985C129.127 65.3701 131.027 65.3701 132.198 64.1985C133.37 63.0269 133.37 61.1274 132.198 59.9559L126.542 54.299L132.198 48.6422Z"
                      fill="#808080"/>
            </svg>
        </div>

    )

}
