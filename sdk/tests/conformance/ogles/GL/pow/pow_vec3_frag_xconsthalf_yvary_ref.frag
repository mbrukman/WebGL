
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
varying vec4 color;

void main (void)
{
	vec3 c = -2.0 * (color.rgb - 0.5);
	gl_FragColor = vec4(exp2(2.0 * c) / 4.0, 1.0);
}
