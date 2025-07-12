import { BasePage } from "./BasePage"
import { Wrapper, Main, Text } from "../../lib"

export const CoverLayout: FC<ICoverLayout> = ({ title, children }) => {
	return (
		<BasePage title={title}>
			{children}

			<Wrapper>
				<Main>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenean tempus mi augue. Aenean iaculis dolor purus. Orci
						varius natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Quisque lectus risus,
						luctus at luctus eget, gravida vitae odio. Aliquam
						commodo fermentum odio at egestas. Sed rutrum commodo
						auctor. Sed eu ullamcorper mi, accumsan lacinia urna.
						Duis non placerat urna. Suspendisse vel mi eros. Mauris
						rutrum sit amet erat at volutpat. In facilisis molestie
						gravida. Nullam lorem nisi, porta vel arcu nec, cursus
						sagittis nisl. Etiam consequat sed urna eu tincidunt.
						Cras sit amet justo eget est vestibulum aliquet et vitae
						elit.
					</Text>

					<Text>
						Nunc fermentum egestas orci. Aenean vehicula massa a
						lectus imperdiet sodales. Integer finibus mauris dolor,
						non aliquam lectus dignissim et. Ut bibendum augue nec
						mattis consectetur. Vestibulum interdum leo vel tellus
						fringilla bibendum quis ut tellus. Curabitur lacus diam,
						condimentum a ullamcorper nec, facilisis faucibus nisl.
						Quisque euismod massa et erat mollis auctor. Sed aliquet
						elit enim, in dictum eros fringilla vitae. Nulla laoreet
						felis leo, eget faucibus tellus tincidunt vel. Nam eget
						congue felis. Fusce commodo posuere libero, ut
						vestibulum sem efficitur et. Maecenas eros neque, auctor
						eget odio vitae, molestie cursus dui. Vestibulum dapibus
						elit non magna gravida, vel pulvinar dolor tempor. Nunc
						vehicula sem orci, vel tempor mauris accumsan vitae.
						Praesent at scelerisque elit.
					</Text>

					<Text>
						Donec ultrices sit amet massa at semper. Cras quam
						mauris, tempor a luctus vel, lacinia vel dui. In eget
						pellentesque purus. Integer tempus, tortor vitae
						malesuada feugiat, velit quam consequat magna, vitae
						venenatis risus purus a ante. Class aptent taciti
						sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Aenean quis cursus ipsum. Proin
						scelerisque metus sed pellentesque viverra. Proin
						consequat ante risus, quis euismod metus varius non. Sed
						varius tortor sed nunc pulvinar consequat. Etiam tortor
						odio, aliquam ac est et, consequat fringilla justo.
						Mauris in nibh nec neque blandit pulvinar. Sed dapibus
						elit nulla, nec fringilla neque dignissim non. Phasellus
						eu facilisis urna. Vivamus feugiat convallis ligula, id
						congue tellus tincidunt vitae. Aliquam bibendum sed erat
						porta molestie.
					</Text>

					<Text>
						Donec non cursus est. Vestibulum ante ipsum primis in
						faucibus orci luctus et ultrices posuere cubilia curae;
						Proin elementum consectetur orci ac faucibus. Sed
						sodales dolor lorem, consectetur sollicitudin nunc
						viverra eget. Aliquam eget tortor ultrices neque commodo
						bibendum. Mauris tellus lacus, posuere eget tincidunt
						ac, maximus sit amet turpis. Donec in quam eget quam
						pulvinar feugiat. Morbi ante dolor, rhoncus a pharetra
						in, laoreet eget odio. Donec commodo ligula ac gravida
						aliquam. Nam ac lorem at turpis facilisis tempus et
						egestas libero.
					</Text>

					<Text>
						Nulla gravida, quam a ultrices molestie, ante nisl
						commodo nibh, eget elementum ligula ex eget ante. Sed
						elementum quam nec diam pellentesque vehicula. Phasellus
						elementum lacus ligula. Vivamus ornare eros at purus
						vehicula, vel pulvinar diam hendrerit. Sed non nulla
						fringilla, venenatis dui ut, ultrices nunc. Nam libero
						arcu, varius eget lacus sit amet, facilisis ullamcorper
						nibh. Duis vel neque tellus.
					</Text>
				</Main>
			</Wrapper>
		</BasePage>
	)
}

interface ICoverLayout {
	title: string
	children?: Children
}
